import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import heroDesktop from '@/assets/hero-desktop.png';
import heroMobile from '@/assets/hero-mobile.png';

const HeroSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="hero-section relative overflow-hidden h-[calc(100vh-5rem)] min-h-[600px] flex items-center">
      {/* Background Images */}
      <img
        src={heroDesktop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />
      <img
        src={heroMobile}
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
      />

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="flex flex-col gap-8 lg:gap-12 items-center lg:items-start lg:max-w-[55%]">
          {/* Text Content */}
          <div className="text-center lg:text-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[2rem] md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 leading-relaxed">
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-semibold mb-10 text-white">
              {t("hero.cta")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://api.whatsapp.com/send?phone=9660569522042"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-primary">
                <MessageCircle className="w-5 h-5" />
                {t("hero.contactNow")}
              </a>
              <Link to={`tel:+966569522042`} className="btn-hero-secondary">
                <Phone className="w-5 h-5" />
                {t("hero.bookConsultation")}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
