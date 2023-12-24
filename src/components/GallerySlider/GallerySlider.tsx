'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import data from '@/data/gallery.json';
import { useState } from 'react';

const GallerySlider = () => {
  // const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Swiper
      className="h-[609px] md:h-[294px] xl:h-[294px]"
      wrapperTag="ul"
      modules={[Navigation, EffectCoverflow]}
      direction={'vertical'}
      slidesPerView={3}
      spaceBetween={24}
      loop={true}
      navigation={{
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }}
      // onSlideChange={swiper => console.log(swiper)}
      // onSlideChange={args => setActiveSlide(args.activeIndex + 1)}
      // initialSlide={0}
      breakpoints={{
        768: {
          direction: 'horizontal',
        },
        1280: {},
      }}
    >
      {data.slides.map(({ img, alt }, idx) => (
        <SwiperSlide tag="li" key={idx}>
          {({ isActive }) => (
            <div className={`relative h-[187px]`}>
              <Image
                src={img}
                alt={alt}
                fill
                sizes="(max-width: 480px) 280px, (max-width: 1279px) 342px, 596px"
                quality={90}
                priority
                // className={``}
              />
              {/* {console.log(isActive)} */}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GallerySlider;
