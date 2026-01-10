import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, TrendingUp, Users, Calendar, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const CaseStudyPage = () => {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  useScrollToTop();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const stats = [
    { icon: TrendingUp, value: '2,006', label: isRTL ? 'حجز فعلي' : 'Actual Bookings' },
    { icon: Calendar, value: '3', label: isRTL ? 'أشهر فقط' : 'Months Only' },
    { icon: Users, value: '150K+', label: isRTL ? 'وصول' : 'Reach' },
    { icon: Target, value: '4.2x', label: isRTL ? 'عائد الاستثمار' : 'ROI' },
  ];

  return (
    <>
      <Helmet>
        <title>{isRTL ? 'قصة نجاح | بيور ماركتنج' : 'Case Study | Pure Marketing'}</title>
        <meta 
          name="description" 
          content={isRTL 
            ? 'اكتشف كيف حققنا 2,006 حجز فعلي خلال 3 أشهر فقط لمركز طبي في السعودية' 
            : 'Discover how we achieved 2,006 actual bookings in just 3 months for a medical center in Saudi Arabia'
          } 
        />
      </Helmet>

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-section section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <p className="text-primary-foreground/80 text-lg mb-4">
                {t('caseStudy.title')}
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('caseStudy.mainTitle')}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {t('caseStudy.client')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    {isRTL ? 'التحدي' : 'The Challenge'}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {isRTL 
                      ? 'واجه المركز الطبي تحديات كبيرة في الوصول إلى العملاء المستهدفين وتحويلهم إلى حجوزات فعلية. كانت الحملات الإعلانية السابقة تستهلك ميزانية كبيرة دون تحقيق النتائج المرجوة.'
                      : 'The medical center faced significant challenges in reaching target customers and converting them into actual bookings. Previous advertising campaigns consumed large budgets without achieving desired results.'
                    }
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    {isRTL ? 'الحل' : 'The Solution'}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {isRTL 
                      ? 'قمنا بتصميم استراتيجية متكاملة تشمل حملات سناب شات وانستقرام مستهدفة، مع تحسين مستمر للإعلانات بناءً على البيانات والتحليلات اللحظية.'
                      : 'We designed an integrated strategy including targeted Snapchat and Instagram campaigns, with continuous ad optimization based on real-time data and analytics.'
                    }
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    {isRTL ? 'النتائج' : 'The Results'}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {isRTL 
                      ? 'حققنا 2,006 حجز فعلي خلال 3 أشهر فقط، مع عائد استثمار يتجاوز 4 أضعاف المبلغ المستثمر في الحملات الإعلانية.'
                      : 'We achieved 2,006 actual bookings in just 3 months, with an ROI exceeding 4 times the amount invested in advertising campaigns.'
                    }
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    {isRTL ? 'هل تريد نتائج مماثلة؟' : 'Want Similar Results?'}
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    {isRTL 
                      ? 'تواصل معنا اليوم لنبدأ رحلة نجاحك'
                      : 'Contact us today to start your success journey'
                    }
                  </p>
                  <Button asChild size="lg" className="gap-2">
                    <Link to={`/${language}#contact`}>
                      {t('common.contactUs')}
                      <ArrowIcon className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
};

export default CaseStudyPage;
