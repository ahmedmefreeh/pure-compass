import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
// import heroBg from "@/assets/banner1920x1080.jpg";
import hero2 from "@/assets/hero2.png";
import hero3 from '@/assets/pureWeb.png'

const HeroSection = () => {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/lottie/business-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie animation:", err));
  }, []);
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="hero-section relative overflow-hidden h-[calc(100vh-5rem)] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero3})` }}
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/50" />

      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div> */}

      <div className="container-custom relative z-10 py-20 lg:py-32 max-w-[50rem]">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-4xl text-center lg:text-center justify-center items-center flex flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-7xl md:text-8xl lg:text-8xl font-bold leading-tight mb-6">
              {t("hero.heading")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-3xl lg:text-3xl font-extrabold text-primary-foreground/90 mb-4 leading-relaxed">
              {t("hero.subtitle1")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[0.9rem] md:text-xl lg:text-xl text-primary-foreground/90 mb-4 leading-relaxed">
              {t("hero.subtitle2")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[0.9rem] md:text-xl lg:text-xl text-primary-foreground/90 mb-4 leading-relaxed">
              {t("hero.subtitle3")}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[0.9rem] md:text-xl mb-10">
              {t("hero.cta")}
            </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Lottie Animation Mobile*/}
                {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex sm:hidden items-center justify-center">
                {animationData && (
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    className="min-w-full max-w-xs sm:max-w-sm lg:max-w-lg"
                  />
                )}
              </motion.div> */}
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero-primary">
                  <MessageCircle className="w-5 h-5" />
                  {t("hero.contactNow")}
                </a>
                <Link to={`tel:+966500000000`} className="btn-hero-secondary">
                  <Phone className="w-5 h-5" />
                  {t("hero.bookConsultation")}
                </Link>
              </motion.div>
          </div>

          {/* Lottie Animation Desktop*/}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sm:flex hidden items-center justify-center">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={false}
                className="min-w-full max-w-xs sm:max-w-sm lg:max-w-lg"
              />
            )}
          </motion.div> */}
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"
      /> */}
    </section>
  );
};

export default HeroSection;
