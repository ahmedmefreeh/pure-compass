import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png';

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  const quickLinks = [
    { key: 'home', hash: '' },
    { key: 'about', hash: '#about' },
    { key: 'services', hash: '#services' },
    { key: 'portfolio', hash: '#portfolio' },
    { key: 'blog', hash: '#blog' },
    { key: 'contact', hash: '#contact' },
  ];

  const services = [
    { key: 'socialMedia', slug: 'social-media-management' },
    { key: 'paidAds', slug: 'paid-ads-campaigns' },
    { key: 'websites', slug: 'websites-ecommerce' },
    { key: 'motionGraphics', slug: 'video-editing-motion-graphics' },
  ];

  const blogPosts = [
    { slug: 'digital-marketing-trends-2025' },
    { slug: 'social-media-strategy-guide' },
    { slug: 'ecommerce-success-tips' },
    { slug: 'paid-ads-optimization' },
  ];

  const handleNavClick = (hash: string) => {
    if (!hash) {
      // Home link
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(`/${language}`);
      }
      return;
    }

    if (isHomePage) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${language}${hash}`);
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* About */}
          <div className="space-y-6">
            <Link to={`/${language}`}>
              <img src={logoWhite} alt="Pure Marketing" className="h-10 w-auto" />
            </Link>
            <p className="text-background/80 leading-relaxed">
              {t('footer.aboutText')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavClick(link.hash)}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.popularServices')}</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <Link
                    to={`/${language}/services/${service.slug}`}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {t(`services.${service.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.blog')}</h4>
            <ul className="space-y-3">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/${language}/blog/${post.slug}`}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {t(`blogSection.posts.${post.slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <a
                href="tel:+966500000000"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+966 50 000 0000</span>
              </a>
              <a
                href="mailto:info@puremarketing.sa"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@puremarketing.sa</span>
              </a>
              <div className="flex items-center gap-3 text-background/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{language === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
