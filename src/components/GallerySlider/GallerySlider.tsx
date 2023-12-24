'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import data from '@/data/gallery.json';

const GallerySlider = () => {
  return (
    <div className="flex h-[609px] w-full flex-col md:h-[306px] md:flex-row">
      <Swiper
        wrapperTag="ul"
        modules={[Navigation]}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        spaceBetween={24}
        loop={true}
        slidesPerView={3}
        // onSlideChange={swiper => console.log(swiper)}
        breakpoints={{
          320: {
            direction: 'vertical',
          },
          768: {
            direction: 'horizontal',
          },
          1280: {},
        }}
      >
        {data.slides.map(({ img, alt }, idx) => (
          <SwiperSlide tag="li" key={idx}>
            <div className="h-[187px]  w-full">
              <Image
                src={img}
                alt={alt}
                height={187}
                width={280}
                // fill
                // sizes="(max-width: 480px) 280px, (max-width: 1279px) 342px, 596px"
                //   quality={90}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
