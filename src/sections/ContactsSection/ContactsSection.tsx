import SectionTitle from '@/components/ui/SectionTitle';
import ContactDetails from '@/components/ContactDetails';
import Socials from '@/components/ui/Socials';
import ContactsForm from '@/components/ContactForm';

import data from '@/data/contacts.json';

const ContactsSection = () => {
  return (
    <section className="contacts-bg xl:pb-[112px]" id="contacts">
      <div className="container">
        <SectionTitle className={'mb-[36px] xl:mb-[71px] mdOnly:leading-none'} {...data.title} />
        <div className="xl:ml-[84px] xl:flex xl:gap-[231px]">
          <div
            className="mb-[12px] flex flex-col gap-[24px] md:mb-[64px] md:flex-row md:gap-[90px] xl:mb-0 
          xl:w-[311px] xl:flex-col xl:gap-[124px] mdOnly:ml-[34px]"
          >
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
