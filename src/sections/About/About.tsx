import { SectionTitle } from '@/components/ui';
import { AboutText } from '@/components/base';

import data from '@/data/about.json';

export const About = () => {
  const { title, descriptions, subtitle } = data;
  const { text, textAccent } = subtitle;

  return (
    <section className="about-bg" id="about">
      <div className="container relative">
        <div className="mb-[40px] md:mb-[64px] md:flex md:gap-[76px] xl:mb-[72px] xl:gap-[24px]">
          <SectionTitle className={'md:w-[408px] xl:w-[606px] smOnly:mb-[8px]'} {...title} />

          <div className="w-[180px] md:mt-[9px] md:w-[220px] xl:mt-[16px] xl:w-[292px]">
            <AboutText className={'mb-[24px] mdOnly:mb-[16px]'} {...descriptions[0]} />

            <AboutText {...descriptions[1]} />
          </div>
        </div>
        <h3
          className="flex w-[180px] flex-col md:absolute xl:bottom-0 xl:right-[24px]
          smOnly:mb-[40px] smOnly:ml-auto mdOnly:top-[385px]"
        >
          <span className="uppercase">{textAccent[0]}</span>

          <span className="ml-auto uppercase">{textAccent[1]}</span>

          <span className="font-extralight tracking-[-0.14px]">{text}</span>
        </h3>

        <AboutText
          className={'md:ml-auto md:w-[463px] xl:ml-0 xl:w-[605px]'}
          {...descriptions[2]}
        />
      </div>
    </section>
  );
};
