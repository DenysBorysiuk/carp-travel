import data from '@/data/career.json';

const CareerList = () => {
  return (
    <ul className=" flex w-[181px] flex-col gap-[16px] smOnly:mb-[112px]">
      {data.description.map(item => (
        <li className="text-right" key={item.title}>
          <h4
            className="mb-[8px] leading-[1.42] md:text-[16px] md:leading-[1.25] xl:text-[18px] 
            xl:md:leading-[1.33]"
          >
            {item.title}
          </h4>
          <p className="text-[12px] leading-[1.67]">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default CareerList;
