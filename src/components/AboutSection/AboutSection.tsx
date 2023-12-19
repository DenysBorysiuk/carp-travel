import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/about.json';
import AboutText from '@/components/ui/AboutText';

const AboutSection = () => {
  return (
    <section className="about-bg" id="about">
      <div className="container relative">
        <div className="mb-[40px] md:mb-[64px] md:flex md:h-[445px] md:flex-col md:flex-wrap">
          <SectionTitle className={'mb-[8px]'} data={data.title} />
          <div className="w-[180px] md:w-[220px] md:pt-[9px]">
            <AboutText className={'mb-[24px] md:mb-[16px]'} data={data.descriptions[0]} />
            <AboutText className={''} data={data.descriptions[1]} />
          </div>
        </div>
        <h3 className="mb-[40px] ml-auto flex w-[180px] flex-col md:absolute md:top-[385px]">
          <span className="uppercase">{data.subtitle.textAccent[0]}</span>
          <span className="ml-auto uppercase">{data.subtitle.textAccent[1]}</span>
          <span className="font-extralight tracking-[-0.14px]">{data.subtitle.text}</span>
        </h3>
        <AboutText className={'md:ml-auto md:w-[463px]'} data={data.descriptions[2]} />
      </div>
    </section>
  );
};

export default AboutSection;
