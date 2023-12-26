'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import ServicesSlide from '@/components/ServicesSlide';
import data from '@/data/services.json';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const { slides, title } = data;

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <section className="p-0" id="services">
      <Swiper
        modules={[EffectFade, Pagination]}
        effect="fade"
        slidesPerView={1}
        // pagination={{
        //   clickable: true,
        // }}
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
        // onSwiper={swiper => console.log(swiper)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className={`${slide.bg} py-[56px] md:py-[64px] xl:py-[104px] smOnly:h-[851px]`}>
                <ServicesSlide {...slide} title={title} currentSlide={currentSlide} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
