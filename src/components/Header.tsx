import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark from '@/assets/logo-dark.png';
import ConsultationPopup from './ConsultationPopup';

const Header = () => {
  const { t } = useTranslation();
  const { language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', path: `/${language}`, hash: '' },
    { key: 'services', path: `/${language}`, hash: '#services', hasDropdown: true },
    { key: 'about', path: `/${language}`, hash: '#about' },
    { key: 'portfolio', path: `/${language}`, hash: '#portfolio' },
    { key: 'blog', path: `/${language}`, hash: '#blog' },
    { key: 'contact', path: `/${language}`, hash: '#contact' },
  ];

  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  const scrollToSection = (hash: string) => {
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavClick = (item: typeof navItems[0], closeMenu = false) => {
    if (closeMenu) {
      setIsMenuOpen(false);
    }
    
    // For home link without hash
    if (item.key === 'home' && !item.hash) {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(`/${language}`);
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
      return;
    }

    if (item.hash) {
      if (isHomePage) {
        scrollToSection(item.hash);
      } else {
        navigate(`/${language}`);
        scrollToSection(item.hash);
      }
    }
  };

  const services = [
    { key: 'socialMedia', slug: 'social-media-management' },
    { key: 'paidAds', slug: 'paid-ads-campaigns' },
    { key: 'motionGraphics', slug: 'video-editing-motion-graphics' },
    { key: 'websites', slug: 'websites-ecommerce' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  // Hamburger menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
    },
    open: {
      opacity: 1,
      height: 'auto',
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: isRTL ? 20 : -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md' 
            : 'bg-background border-b border-border'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={`/${language}`} className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={logoDark} alt="Pure Marketing" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.key} className="relative group">
                  {item.hasDropdown ? (
                    <div
                      className="flex items-center gap-1 cursor-pointer py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span className="text-foreground hover:text-primary transition-colors font-medium">
                        {t(`nav.${item.key}`)}
                      </span>
                      <ChevronDown className="w-4 h-4" />
                      
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-lg border border-border overflow-hidden"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.key}
                                to={`/${language}/services/${service.slug}`}
                                className="block px-4 py-3 hover:bg-muted transition-colors"
                              >
                                {t(`services.${service.key}.title`)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`text-foreground hover:text-primary transition-colors font-medium ${
                        item.key === 'home' && isHomePage ? 'text-primary' : ''
                      }`}
                    >
                      {t(`nav.${item.key}`)}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
              <Button 
                variant="outline"
                onClick={() => handleNavClick({ key: 'contact', path: `/${language}`, hash: '#contact' })}
              >
                {t('common.contactUs')}
              </Button>
              <Button onClick={() => setIsConsultationOpen(true)}>
                {t('common.bookConsultation')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden border-t border-border overflow-hidden"
              >
                <nav className="py-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.key}
                      custom={index}
                      variants={menuItemVariants}
                      initial="closed"
                      animate="open"
                    >
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                          >
                            <span>{t(`nav.${item.key}`)}</span>
                            <motion.div
                              animate={{ rotate: isServicesOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ps-8 space-y-1 overflow-hidden"
                              >
                                {services.map((service) => (
                                  <Link
                                    key={service.key}
                                    to={`/${language}/services/${service.slug}`}
                                    className="block px-4 py-2 text-muted-foreground hover:text-foreground"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {t(`services.${service.key}.title`)}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNavClick(item, true)}
                          className="block w-full text-start px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                        >
                          {t(`nav.${item.key}`)}
                        </button>
                      )}
                    </motion.div>
                  ))}
                  <motion.div 
                    custom={navItems.length}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    className="flex flex-col gap-4 px-4 pt-4 border-t border-border"
                  >
                    <button
                      onClick={toggleLanguage}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
                    </button>
                    <Button 
                      variant="outline"
                      onClick={() => {
                        handleNavClick({ key: 'contact', path: `/${language}`, hash: '#contact' }, true);
                      }}
                    >
                      {t('common.contactUs')}
                    </Button>
                    <Button 
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsConsultationOpen(true);
                      }}
                    >
                      {t('common.bookConsultation')}
                    </Button>
                  </motion.div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      
      <ConsultationPopup 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </>
  );
};

export default Header;
