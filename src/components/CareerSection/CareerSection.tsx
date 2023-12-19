import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/career.json';

const CareerSection = () => {
  return (
    <section className="" id="career">
      <div className="container xl:max-w-screen-xl">
        <SectionTitle className={''} data={data.title} />
      </div>
    </section>
  );
};

export default CareerSection;
