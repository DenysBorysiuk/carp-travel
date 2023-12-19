import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/about.json';

const AboutSection = () => {
  return (
    <section className="border border-red-500" id="about">
      <div className="container xl:max-w-screen-xl">
        <SectionTitle className={''} data={data.title} />
      </div>
    </section>
  );
};

export default AboutSection;
