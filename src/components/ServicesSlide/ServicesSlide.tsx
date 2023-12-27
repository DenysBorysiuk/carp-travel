import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { ServicesSlideProps } from './type';

const ServicesSlide = ({
  title,
  list,
  onButtonClick,
  currentSlide,
  img,
  slogan,
  text,
}: ServicesSlideProps) => {
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
        <div className="relative md:w-[221px] xl:w-[605px]">
          <p
            className="text-[12px] leading-loose tracking-[2.4px] md:absolute md:top-[197px] 
            xl:hidden smOnly:mb-[24px] smOnly:text-right"
          >
            {slogan}
          </p>
          <div className="flex h-[320px] flex-col justify-between md:h-[370px] xl:h-[429px]">
            <ul className="flex flex-col gap-[16px]">
              {list.map((item, index) => (
                <li key={item}>
                  <button
                    className={`anim  relative flex w-[169px] items-center
                     text-left text-[20px] font-extralight uppercase leading-[0.85] transition-all 
                     md:w-[186px] md:text-[22px] md:leading-[0.82]
                    ${
                      currentSlide === index
                        ? 'btn ml-[16px] font-medium'
                        : 'opacity-50 hover:ml-[8px] hover:opacity-100 focus:ml-[8px] focus:opacity-100'
                    }`}
                    type="button"
                    onClick={() => onButtonClick(index)}
                  >
                    {item}
                    {currentSlide === index && (
                      <p
                        className="left-[300px] top-[-5px] hidden w-[293px] text-[12px] leading-loose
                      tracking-[2.4px] xl:absolute xl:block"
                      >
                        {slogan}
                      </p>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <p className="md:text-justify xl:ml-auto xl:w-[293px] mdOnly:text-[13px] mdOnly:leading-[1.53]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlide;
