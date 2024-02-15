import data from '@/data/contacts.json';

const { phones, email } = data;

const ContactDetails = () => {
  return (
    <div className="smOnly:ml-auto smOnly:w-[280px]">
      <div className="mb-[24px] flex justify-end gap-[20px] md:ml-[30px] xl:mb-[64px]">
        <ul>
          {phones.numbers.map(number => (
            <li key={number.label}>
              <a className="contacts-link" href={number.href}>
                {number.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-[4px] text-[12px] leading-[1.66] xl:mt-[3px] xl:leading-loose">
          {phones.text}
        </p>
      </div>
      <address className="flex items-center gap-[20px] not-italic smOnly:ml-[16px]">
        <a className="contacts-link" href={email.href}>
          {email.label}
        </a>
        <p className="text-[12px] xl:leading-loose">{email.text}</p>
      </address>
    </div>
  );
};

export default ContactDetails;
