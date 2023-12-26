'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import ServicesSlide from '@/components/ServicesSlide';
import data from '@/data/services.json';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const { slides, title } = data;

const ServicesSection = () => {
  return (
    <section id="services">
      <Swiper
        modules={[EffectFade, Pagination]}
        // effect="fade"
        slidesPerView={1}
        // pagination={{
        //   clickable: true,
        // }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={swiper => console.log(swiper)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className={`${slide.bg}`}>
                <ServicesSlide {...slide} title={title} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
