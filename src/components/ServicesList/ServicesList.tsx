import ServicesSlogan from '@/components/ui/ServicesSlogan';
import { ServicesListProps } from './type';

const ServicesList = ({ list, currentSlide, onButtonClick, slogan }: ServicesListProps) => {
  return (
    <ul className="flex flex-col gap-[16px] xl:gap-[24px]">
      {list.map((item, index) => (
        <li key={item}>
          <button
            className={`anim relative flex w-[169px] items-center
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
              <ServicesSlogan
                className="left-[295px] top-[-5px] hidden w-[293px] xl:absolute xl:block"
                slogan={slogan}
              />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
