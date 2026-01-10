import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const BlogListPage = () => {
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  useScrollToTop();

  const blogPosts = [
    {
      slug: 'digital-marketing-trends-2025',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop',
      readTime: 5,
      date: '2025-01-05',
    },
    {
      slug: 'social-media-strategy-guide',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=500&fit=crop',
      readTime: 8,
      date: '2025-01-02',
    },
    {
      slug: 'ecommerce-success-tips',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
      readTime: 6,
      date: '2024-12-28',
    },
    {
      slug: 'paid-ads-optimization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      readTime: 7,
      date: '2024-12-20',
    },
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Helmet>
        <title>{t('blogSection.title')} | Pure Marketing</title>
        <meta name="description" content={t('blogSection.subtitle')} />
        <link rel="canonical" href={`https://puremarketing.sa/${language}/blog`} />
        <html lang={language} dir={isRTL ? 'rtl' : 'ltr'} />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="hero-section py-20 md:py-28">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {t('blogSection.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-primary-foreground/90 max-w-3xl mx-auto"
            >
              {t('blogSection.subtitle')}
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={`/${language}/blog/${post.slug}`}
                    className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={t(`blogSection.posts.${post.slug}.title`)}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{formatDate(post.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime} {t('blogSection.minRead')}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {t(`blogSection.posts.${post.slug}.title`)}
                      </h2>
                      <p className="text-muted-foreground line-clamp-3">
                        {t(`blogSection.posts.${post.slug}.excerpt`)}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogListPage;
