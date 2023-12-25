'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import data from '@/data/gallery.json';

const GallerySlider = () => {
  return (
    <div className="relative mx-auto px-[20px] md:w-[768px] md:px-[32px] xl:w-[1280px] xl:px-0 smOnly:max-w-[480px]">
      <Swiper
        className="h-[609px] md:h-[295px] xl:h-[430px]"
        wrapperTag="ul"
        modules={[Navigation]}
        centeredSlides={true}
        grabCursor={true}
        direction={'vertical'}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
      >
        {data.slides.map(({ img, alt }, idx) => (
          <SwiperSlide tag="li" key={idx} className="relative">
            {({ isActive }) => (
              <div
                className={`image-wrapper relative h-[187px] transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? 'before:hidden md:h-[294px] md:w-[415px] xl:h-[429px] xl:w-[606px]'
                    : ' md:h-[87px] md:w-[121px] xl:h-[225px] xl:w-[313px] smOnly:before:hidden'
                }  `}
              >
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 280px, (max-width: 1279px) 342px, 596px"
                  quality={90}
                  priority
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
