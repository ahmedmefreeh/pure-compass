import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';
import logoWhite from '@/assets/logo-white.png';

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const quickLinks = [
    { key: 'home', section: 'hero' },
    { key: 'about', section: 'why-us' },
    { key: 'services', section: 'services' },
    { key: 'portfolio', section: 'case-study' },
  ];

  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${language}#${sectionId}`;
    }
  };

  const services = [
    { key: 'paidAds', slug: 'paid-ads-campaigns' },
    { key: 'websites', slug: 'websites-ecommerce' },
    { key: 'motionGraphics', slug: 'video-editing-motion-graphics' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                    onClick={() => handleScrollTo(link.section)}
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

          {/* Contact & Blog */}
          <div>
            <h4 className="text-lg font-bold mb-6">{t('footer.blog')}</h4>
            <p className="text-background/80 mb-6">{t('footer.blogText')}</p>
            <div className="space-y-3">
              <a
                href="tel:+966500000000"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+966 50 000 0000</span>
              </a>
              <a
                href="mailto:info@puremarketing.sa"
                className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
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
