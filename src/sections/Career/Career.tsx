import { CareerForm, CareerList } from '@/components/base';
import { SectionTitle } from '@/components/ui';

import data from '@/data/career.json';

export const Career = () => {
  const { title, text1, subtitle } = data;

  return (
    <>
      <section className="career-bg" id="career">
        <div className="container xl:relative">
          <div className="mb-[36px] md:mb-[5px] md:flex md:gap-[115px] xl:mb-[24px] xl:gap-[400px]">
            <SectionTitle className={'smOnly:mb-[24px]'} {...title} />

            <p
              className="w-[179px] md:mt-[8px] md:w-[221px] md:text-justify md:text-[13px] md:leading-[1.53] 
            xl:mt-[16px] xl:w-[293px] xl:text-[18px] xl:leading-[1.33]  smOnly:ml-auto "
            >
              {text1}
            </p>
          </div>

          <h3
            className="mb-[36px] ml-[100px] text-[30px] font-extralight uppercase leading-[1.21] md:mb-[56px] 
            md:ml-[80px] xl:absolute xl:mb-0 xl:ml-[123px] xl:text-[36px] xl:leading-none"
          >
            {subtitle}
          </h3>

          <div className="md:flex md:gap-[20px] xl:gap-[24px] xl:pl-[40px] ">
            <CareerList />

            <CareerForm className="smOnly:hidden" variant="md" />
          </div>
        </div>
      </section>

      <section className="career-bg md:hidden">
        <h2 className="hidden">Career form</h2>

        <div className="container">
          <CareerForm variant="sm" />
        </div>
      </section>
    </>
  );
};
