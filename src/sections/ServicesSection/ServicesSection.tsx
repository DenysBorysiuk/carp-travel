'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperClass } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import ServicesSlide from '@/components/ServicesSlide';
import data from '@/data/services.json';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const { slides, title, list } = data;

const ServicesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const onButtonClick = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  return (
    <section className="p-0" id="services">
      <Swiper
        wrapperTag="ul"
        modules={[EffectFade, Pagination]}
        grabCursor={false}
        allowTouchMove={false}
        effect="fade"
        slidesPerView={1}
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
        onSwiper={setSwiperInstance}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} tag="li">
            <div className={`${slide.bg} py-[56px] md:py-[64px] xl:py-[104px] smOnly:h-[851px]`}>
              <ServicesSlide
                {...slide}
                title={title}
                list={list}
                onButtonClick={onButtonClick}
                currentSlide={currentSlide}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
