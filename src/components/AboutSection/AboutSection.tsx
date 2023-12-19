import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/about.json';
import AboutText from '@/components/ui/AboutText';

const AboutSection = () => {
  return (
    <section className="about-bg" id="about">
      <div className="container">
        <SectionTitle className={'mb-[8px]'} data={data.title} />
        <AboutText className={'mb-[24px] w-[180px]'} data={data.descriptions[0]} />
        <AboutText className={'mb-[40px] w-[180px]'} data={data.descriptions[1]} />
        <h3 className="mb-[40px] block w-[180px] font-extralight">
          <span className="block font-normal  uppercase">{data.subtitle.textAccent}</span>
          {data.subtitle.text}
        </h3>
        <AboutText className={''} data={data.descriptions[2]} />
      </div>
    </section>
  );
};

export default AboutSection;
