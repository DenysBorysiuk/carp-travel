import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/career.json';

const ContactsSection = () => {
  return (
    <section className="" id="contacts">
      <div className="container xl:max-w-screen-xl">
        <SectionTitle className={''} data={data.title} />
      </div>
    </section>
  );
};

export default ContactsSection;
