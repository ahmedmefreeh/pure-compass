import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Play } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CaseStudySection = () => {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="hero-section section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1">
            <p className="text-primary-foreground/80 text-lg mb-4">
              {t("caseStudy.title")}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t("caseStudy.mainTitle")}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              {t("caseStudy.client")}
            </p>
            <Link
              to={`/${language}/case-study`}
              className="btn-hero-primary inline-flex">
              <Play className="w-5 h-5" />
              {t("caseStudy.cta")}
              {isRTL ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0}}
            animate={isInView ? { opacity: 1} : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-4 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop"
                alt="Medical Center Case Study"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary-dark/60 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
