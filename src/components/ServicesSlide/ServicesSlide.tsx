import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { ServicesSlideProps } from './type';

const ServicesSlide = ({ title, currentSlide, img, slogan, text }: ServicesSlideProps) => {
  return (
    <div className="container">
      <div className="md:mb-[36px] md:flex md:gap-[170px] xl:mb-[23px] xl:gap-[162px]">
        <SectionTitle className={'md:w-[313px] xl:w-[458px] smOnly:mb-[24px]'} data={title} />
        <div className="w-[116px] md:w-[181px] xl:w-[265px] smOnly:mb-[16px] smOnly:ml-auto">
          <span className="text-[43px] font-thin leading-[1.21] md:text-[67px] md:leading-[1.16] xl:text-[98px]">
            0{currentSlide + 1}/
          </span>
          <span className="text-[43px] font-thin leading-[1.21] text-white/20 md:text-[67px] md:leading-[1.16] xl:text-[98px]">
            05
          </span>
        </div>
      </div>
      <div className="md:flex md:gap-[20px]">
        <div className="relative h-[213px] md:h-[370px] md:w-[463px] xl:h-[429px] xl:w-[607px] smOnly:mb-[12px]">
          <Image src={img.href} alt={img.alt} fill priority />
        </div>
        <div className="md:w-[221px]">
          <p>{slogan}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlide;
