import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';

// Partner logos using placeholder images that look like company logos
// const partners = [
//   { id: 1, name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop&q=80' },
//   { id: 2, name: 'InnovateSA', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop&q=80' },
//   { id: 3, name: 'DigiHealth', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&q=80' },
//   { id: 4, name: 'RetailPro', logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200&h=80&fit=crop&q=80' },
//   { id: 5, name: 'BuildKSA', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=80&fit=crop&q=80' },
//   { id: 6, name: 'FoodChain', logo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=80&fit=crop&q=80' },
//   { id: 7, name: 'AutoDrive', logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=80&fit=crop&q=80' },
//   { id: 8, name: 'EduLearn', logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=80&fit=crop&q=80' },
// ];

const partners = [
  {
    id: 1,
    name: "Slack",
    logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
  },
  {
    id: 2,
    name: "Trello",
    logo: "https://cdn.worldvectorlogo.com/logos/trello.svg",
  },
  {
    id: 3,
    name: "Zoom",
    logo: "https://cdn.worldvectorlogo.com/logos/zoom-communications-logo.svg",
  },
  {
    id: 4,
    name: "Dropbox",
    logo: "https://cdn.worldvectorlogo.com/logos/dropbox-1.svg",
  },
  {
    id: 5,
    name: "Monday",
    logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg",
  },
  {
    id: 6,
    name: "Shopify",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    id: 7,
    name: "Hubspot",
    logo: "https://cdn.worldvectorlogo.com/logos/hubspot.svg",
  },
  {
    id: 8,
    name: "Stripe",
    logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg",
  },
  {
    id: 9,
    name: "Zendesk",
    logo: "https://cdn.worldvectorlogo.com/logos/zendesk-1.svg",
  },
];

const PartnersCarousel = () => {
  const {i18n} = useTranslation();
  const isRTL = i18n.language ==="ar";

  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container-custom">
        <Swiper
          key={isRTL ? "rtl" : "ltr"}
          dir={isRTL ? "rtl" : "ltr"}
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="partners-swiper">
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center h-20">
                <div className="partner-logo-container flex items-center justify-center bg-background rounded-lg px-6 py-3 border border-border hover:border-primary/30 transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain hover:opacity-50 transition-all duration-300"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersCarousel;
