import data from '@/data/career.json';

const CareerList = () => {
  return (
    <ul
      className=" flex w-[181px] flex-col gap-[16px] md:w-[225px] md:gap-[24px] xl:mt-[87px] 
    xl:w-[562px] smOnly:mb-[112px]"
    >
      {data.description.map(item => (
        <li className="text-right xl:flex xl:gap-[24px]" key={item.title}>
          <h4
            className="mb-[8px] leading-[1.42] md:text-[16px] md:leading-[1.25] xl:mb-0 
            xl:w-[253px] xl:text-[18px] xl:md:leading-[1.33]"
          >
            {item.title}
          </h4>
          <p className="text-[12px] leading-[1.67] xl:w-[285px] xl:text-left xl:leading-loose">
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default CareerList;
