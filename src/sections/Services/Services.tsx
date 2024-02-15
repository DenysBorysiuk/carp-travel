'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import ServicesSlide from '@/components/base/ServicesSlide';

import data from '@/data/services.json';

import 'swiper/css';
import 'swiper/css/effect-fade';

const { slides, title, list } = data;

export const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

  const onSlideTo = (index: number) => {
    swiperInstance?.slideTo(index);
  };

  return (
    <section className="p-0" id="services">
      <Swiper
        wrapperTag="ul"
        modules={[EffectFade]}
        grabCursor={false}
        allowTouchMove={false}
        effect="fade"
        speed={800}
        slidesPerView={1}
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex)}
        onSwiper={setSwiperInstance}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} tag="li">
            {({ isActive }) => (
              <div className={`${slide.bg} py-[56px] md:py-[64px] xl:py-[104px] smOnly:h-[851px]`}>
                <ServicesSlide
                  {...slide}
                  title={title}
                  list={list}
                  onSlideTo={onSlideTo}
                  currentSlide={currentSlide}
                  totalSlides={slides.length}
                  isActive={isActive}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
