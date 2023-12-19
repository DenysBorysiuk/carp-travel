import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/services.json';

const ServicesSection = () => {
  return (
    <section className="section" id="services">
      <div className="container xl:max-w-screen-xl">
        <SectionTitle className={''} data={data.title} />
      </div>
    </section>
  );
};

export default ServicesSection;
