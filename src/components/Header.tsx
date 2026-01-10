import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logoDark from '@/assets/logo-dark.png';

const Header = () => {
  const { t } = useTranslation();
  const { language, setLanguage, isRTL } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { key: 'home', path: `/${language}`, hash: '' },
    { key: 'services', path: `/${language}`, hash: '#services', hasDropdown: true },
    { key: 'about', path: `/${language}`, hash: '#about' },
    { key: 'portfolio', path: `/${language}`, hash: '#portfolio' },
    { key: 'blog', path: `/${language}`, hash: '#blog' },
    { key: 'contact', path: `/${language}`, hash: '#contact' },
  ];

  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

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
      }
      return;
    }

    if (item.hash) {
      if (isHomePage) {
        // Already on home page, just scroll
        const element = document.querySelector(item.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home with hash
        navigate(`/${language}${item.hash}`);
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

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={`/${language}`} className="flex items-center">
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
            <Button onClick={() => handleNavClick({ key: 'contact', path: `/${language}`, hash: '#contact' })}>
              {t('common.contactUs')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.key}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                        >
                          <span>{t(`nav.${item.key}`)}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isServicesOpen && (
                          <div className="ps-8 space-y-1">
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
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item, true)}
                        className="block w-full text-start px-4 py-3 text-foreground hover:bg-muted rounded-lg"
                      >
                        {t(`nav.${item.key}`)}
                      </button>
                    )}
                  </div>
                ))}
                <div className="flex items-center gap-4 px-4 pt-4 border-t border-border">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'عربي'}</span>
                  </button>
                  <Button 
                    className="flex-1"
                    onClick={() => handleNavClick({ key: 'contact', path: `/${language}`, hash: '#contact' }, true)}
                  >
                    {t('common.contactUs')}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
