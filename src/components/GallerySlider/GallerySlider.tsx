'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import data from '@/data/gallery.json';

import Button from '@/components/ui/Button';

const GallerySlider = () => {
  return (
    <div className="relative mx-auto px-[20px] md:w-[768px] md:px-[32px] xl:w-[1280px] xl:px-0 smOnly:max-w-[480px]">
      <Swiper
        className="gallery h-[609px] md:h-[295px] xl:h-[430px]"
        wrapperTag="ul"
        modules={[Navigation]}
        centeredSlides={true}
        grabCursor={true}
        direction={'vertical'}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        speed={800}
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
        {data.slides.map(({ img, alt }, index) => (
          <SwiperSlide tag="li" key={index} className="gallery-slider">
            {({ isActive }) => (
              <div
                className={`image-wrapper  relative h-[187px] transition-all duration-700 ease-[cubic-bezier(.57,.21,.69,1.25)]
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
                  sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
                  quality={90}
                  priority
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute bottom-0 z-10 md:left-[75px] md:flex md:gap-[459px] xl:left-[235px] 
      xl:gap-[651px] smOnly:hidden"
      >
        <Button className="button-prev text-[33px] font-thin" label="prev" type="button" />
        <Button className="button-next text-[33px] font-thin" label="next" type="button" />
      </div>
    </div>
  );
};

export default GallerySlider;
