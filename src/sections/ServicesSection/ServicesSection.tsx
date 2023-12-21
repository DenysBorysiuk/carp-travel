import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/services.json';

const ServicesSection = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionTitle className={''} data={data.title} />
      </div>
    </section>
  );
};

export default ServicesSection;
