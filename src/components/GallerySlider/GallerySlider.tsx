'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import data from '@/data/gallery.json';

const GallerySlider = () => {
  return (
    // <Swiper
    //   className="h-[609px] md:h-[294px] xl:h-[294px]"
    //   wrapperTag="ul"
    //   modules={[Navigation, EffectCoverflow]}
    //   direction={'vertical'}
    //   slidesPerView={3}
    //   spaceBetween={24}
    //   loop={true}
    //   navigation={{
    //     nextEl: '.button-next',
    //     prevEl: '.button-prev',
    //   }}
    //   // onSlideChange={swiper => console.log(swiper)}
    //   // onSlideChange={args => setActiveSlide(args.activeIndex + 1)}
    //   // initialSlide={0}
    //   breakpoints={{
    //     768: {
    //       direction: 'horizontal',
    //       centeredSlides: true,
    //       effect: 'coverflow',
    //       slidesPerView: 'auto',
    //       coverflowEffect: {
    //         rotate: 0,
    //         stretch: 80,
    //         depth: 200,
    //         modifier: 1,
    //         slideShadows: false,
    //         // scale: 0.35,
    //       },
    //     },
    //     1280: {},
    //   }}
    // >
    //   {data.slides.map(({ img, alt }, idx) => (
    //     <SwiperSlide tag="li" key={idx}>
    //       {({ isActive }) => (
    //         <div
    //           className={`relative md:h-[200px] md:w-[200px] smOnly:h-[187px] ${
    //             isActive ? '' : ''
    //           }`}
    //         >
    //           <Image
    //             src={img}
    //             alt={alt}
    //             fill
    //             sizes="(max-width: 480px) 280px, (max-width: 1279px) 342px, 596px"
    //             quality={90}
    //             priority
    //             // className={``}
    //           />
    //           {/* {console.log(isActive)} */}
    //         </div>
    //       )}
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    <div className="relative md:mx-auto md:w-[768px] md:px-[32px] xl:w-[1280px] xl:px-0">
      <Swiper
        className="md:h-[295px] xl:h-[430px]"
        wrapperTag="ul"
        modules={[Navigation]}
        centeredSlides={true}
        grabCursor={true}
        direction={'horizontal'}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        // onSlideChange={swiper => console.log(swiper)}
        // onSlideChange={args => setActiveSlide(args.activeIndex + 1)}
      >
        {data.slides.map(({ img, alt }, idx) => (
          <SwiperSlide tag="li" key={idx} className="relative">
            {({ isActive }) => (
              <div
                className={`relative transition-all duration-500 ease-out
                ${
                  isActive
                    ? 'md:h-[294px] md:w-[415px] xl:h-[429px] xl:w-[606px]'
                    : 'bg-[rgba(2, 15, 8, 0.75)] z-10 md:h-[87px] md:w-[121px] xl:h-[225px] xl:w-[313px] '
                }  `}
              >
                <img src={img} alt={alt} className="z-1 absolute" />
              </div>

              // <Image
              //   src={img}
              //   alt={alt}
              //   fill
              //   sizes="(max-width: 480px) 280px, (max-width: 1279px) 342px, 596px"
              //   // quality={90}
              //   priority
              // />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
