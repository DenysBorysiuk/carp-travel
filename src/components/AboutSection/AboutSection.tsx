import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/about.json';
import AboutText from '@/components/ui/AboutText';

const AboutSection = () => {
  return (
    <section className="" id="about">
      <div className="container">
        <SectionTitle className={''} data={data.title} />
        <AboutText className={''} data={data.descriptions[0]} />
        <AboutText className={''} data={data.descriptions[1]} />
        <h3 className={''}>
          <span>{data.subtitle.textAccent}</span>
          {data.subtitle.text}
        </h3>
        <AboutText className={''} data={data.descriptions[2]} />
      </div>
    </section>
  );
};

export default AboutSection;
