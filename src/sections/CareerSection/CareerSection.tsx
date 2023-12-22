import CareerForm from '@/components/CareerForm';
import CareerList from '@/components/CareerList';
import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/career.json';

const CareerSection = () => {
  return (
    <section className="" id="career">
      <div className="container">
        <div className="mb-[36px] md:mb-[5px] md:flex md:gap-[115px] xl:mb-[31px] xl:gap-[400px]">
          <SectionTitle className={'smOnly:mb-[24px]'} data={data.title} />
          <p className="w-[179px] md:mt-[8px] md:w-[221px] md:text-justify xl:mt-[16px] xl:w-[293px] smOnly:ml-auto">
            {data.text1}
          </p>
        </div>
        <div>
          <h3
            className="mb-[36px] ml-[100px] text-[30px] font-extralight uppercase leading-[1.21] 
            md:mb-[56px] md:ml-[80px] xl:ml-[123px] xl:text-[36px] xl:leading-none"
          >
            {data.subtitle}
          </h3>
          <CareerList />
        </div>
        <div>
          <p className="mb-[24px] ml-auto w-[179px] md:w-[221px]">
            {data.text2[0]}
            <span className="block">{data.text2[1]}</span>
          </p>
          <CareerForm />
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
