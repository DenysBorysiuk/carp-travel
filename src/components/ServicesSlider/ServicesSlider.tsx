import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const ServicesSlider = () => {
  return (
    <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide key={el}>Slide {el}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default ServicesSlider;
