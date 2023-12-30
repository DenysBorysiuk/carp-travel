import ServicesSlogan from '@/components/ui/ServicesSlogan';
import { ServicesListProps } from './type';

const ServicesList = ({ list, currentSlide, onSlideTo, slogan }: ServicesListProps) => {
  return (
    <ul className="flex flex-col gap-[16px] xl:gap-[24px]">
      {list.map((item, index) => (
        <li className="relative" key={item}>
          <button
            className={`flex w-[169px] items-center
                     text-left text-[20px] font-extralight uppercase leading-[0.85] transition-all 
                     duration-300 md:w-[186px] md:text-[22px] md:leading-[0.82]
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

export default ServicesList;
