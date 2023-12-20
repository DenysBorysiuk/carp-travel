import SectionTitle from '@/components/ui/SectionTitle';
import ContactsForm from '@/components/ui/ContactsForm';
import Socials from '@/components/ui/Socials';
import data from '@/data/contacts.json';

const ContactsSection = () => {
  return (
    <section className="" id="contacts">
      <div className="container">
        <SectionTitle className={'mb-[36px]'} data={data.title} />
        <div>
          <div></div>
          <Socials />
        </div>
        <ContactsForm />
      </div>
    </section>
  );
};

export default ContactsSection;
