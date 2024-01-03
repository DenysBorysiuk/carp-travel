import Image from 'next/image';

import SectionTitle from '@/components/ui/SectionTitle';
import ServicesList from '@/components/ServicesList';
import ServicesSlogan from '@/components/ui/ServicesSlogan';

import { ServicesSlideProps } from './type';

const ServicesSlide = ({
  title,
  list,
  onSlideTo,
  currentSlide,
  totalSlides,
  isActive,
  img,
  slogan,
  text,
}: ServicesSlideProps) => {
  return (
    <div className="container">
      <div className="md:mb-[36px] md:flex md:gap-[170px] xl:mb-[23px] xl:gap-[162px]">
        <SectionTitle className={'md:w-[313px] xl:w-[458px] smOnly:mb-[24px]'} {...title} />
        <div className="w-[116px] md:w-[181px] xl:w-[265px] smOnly:mb-[16px] smOnly:ml-auto">
          <span className="text-[43px] font-thin leading-[1.21] md:text-[67px] md:leading-[1.16] xl:text-[98px]">
            0{currentSlide + 1}/
          </span>
          <span className="text-[43px] font-thin leading-[1.21] text-white/20 md:text-[67px] md:leading-[1.16] xl:text-[98px]">
            0{totalSlides}
          </span>
        </div>
      </div>
      <div className="md:flex md:gap-[20px]">
        <div className="relative h-[213px] md:h-[370px] md:w-[463px] xl:h-[429px] xl:w-[607px] smOnly:mb-[12px]">
          <Image
            src={img.href}
            alt={img.alt}
            fill
            sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 607px"
            quality={90}
            priority
            className="object-cover"
          />
        </div>
        <div className="relative md:w-[221px] xl:w-[605px]">
          <ServicesSlogan
            className="md:absolute md:top-[197px] xl:hidden smOnly:mb-[24px] smOnly:text-right"
            slogan={slogan}
          />
          {isActive && (
            <div className="flex h-[320px] flex-col justify-between md:h-[370px] xl:h-[429px]">
              <ServicesList
                list={list}
                onSlideTo={onSlideTo}
                currentSlide={currentSlide}
                slogan={slogan}
              />
              <p className="md:text-justify xl:ml-auto xl:w-[293px] mdOnly:text-[13px] mdOnly:leading-[1.53]">
                {text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSlide;
