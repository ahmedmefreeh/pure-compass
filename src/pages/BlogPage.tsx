import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useScrollToTop';

// This is a template - blog posts would come from a CMS or JSON file
const BlogPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { language, isRTL } = useLanguage();
  useScrollToTop();

  // Placeholder blog post data
  const blogPost = {
    title: language === 'ar' ? 'عنوان المقالة' : 'Blog Post Title',
    date: '2025-01-10',
    author: language === 'ar' ? 'فريق بيور ماركتنج' : 'Pure Marketing Team',
    content: language === 'ar' 
      ? 'محتوى المقالة سيتم إضافته هنا...'
      : 'Blog post content will be added here...',
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.title} | Pure Marketing</title>
        <meta name="description" content={blogPost.content.substring(0, 160)} />
        <link rel="canonical" href={`https://puremarketing.sa/${language}/blog/${slug}`} />
        <html lang={language} dir={isRTL ? 'rtl' : 'ltr'} />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero-section py-20 lg:py-32">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                {blogPost.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center gap-6 text-primary-foreground/80"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPost.date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPost.author}
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <article className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {blogPost.content}
                </p>
                
                {/* Placeholder for blog content */}
                <div className="my-12 p-12 bg-muted/50 rounded-2xl border-2 border-dashed border-border text-center">
                  <p className="text-muted-foreground">
                    {language === 'ar' 
                      ? 'محتوى المقالة سيتم إضافته هنا'
                      : 'Blog post content will be added here'}
                  </p>
                </div>
              </motion.div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPage;
