import SectionTitle from '@/components/ui/SectionTitle';
import ContactDetails from '@/components/ui/ContactDetails';
import Socials from '@/components/ui/Socials';
import ContactsForm from '@/components/ui/ContactForm';
import data from '@/data/contacts.json';

const ContactsSection = () => {
  return (
    <section className="contacts-bg xl:pb-[112px]" id="contacts">
      <div className="container">
        <SectionTitle className={'mb-[36px] xl:mb-[71px]'} data={data.title} />
        <div className="xl:flex xl:gap-[231px]">
          <div className="mb-[12px] md:mb-[64px] md:flex md:gap-[90px] xl:mb-0 xl:w-[311px] xl:flex-col xl:gap-[124px]">
            <ContactDetails />
            <Socials />
          </div>
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
