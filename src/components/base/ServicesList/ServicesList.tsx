import { ServicesSlogan } from '@/components/ui';

import { ServicesListProps } from './type';

export const ServicesList = ({ list, currentSlide, onSlideTo, slogan }: ServicesListProps) => {
  return (
    <ul className="flex flex-col gap-[16px] xl:gap-[24px]">
      {list.map((item, index) => (
        <li className="relative w-fit" key={item}>
          <button
            className={`relative flex items-center text-left
                      text-[20px] font-extralight uppercase leading-[0.85] transition-all duration-300 
                      md:text-[22px] md:leading-[0.82]
                     ${index === 2 ? 'w-[133px]  md:w-[149px] ' : ''}
                     ${
                       currentSlide === index
                         ? 'btn ml-[16px] font-medium'
                         : 'opacity-50 hover:ml-[8px] hover:opacity-100 focus:ml-[8px] focus:opacity-100'
                     }`}
            type="button"
            onClick={() => onSlideTo(index)}
          >
            {item}
          </button>

          {currentSlide === index && (
            <ServicesSlogan
              className="left-[310px] top-[-5px] hidden w-[293px] xl:absolute xl:block"
              slogan={slogan}
            />
          )}
        </li>
      ))}
    </ul>
  );
};
