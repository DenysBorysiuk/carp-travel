import data from '@/data/contacts.json';

const ContactDetails = () => {
  return (
    <div>
      <div className="mb-[24px] flex justify-end gap-[20px] md:ml-[30px]  xl:mb-[64px]">
        <ul>
          {data.phones.numbers.map(number => (
            <li key={number.label}>
              <a className="contacts-link" href={number.href}>
                {number.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-[4px] text-[12px] xl:leading-loose">{data.phones.text}</p>
      </div>
      <address className="flex items-center gap-[20px] not-italic smOnly:ml-[16px]">
        <a className="contacts-link" href={data.email.href}>
          {data.email.label}
        </a>
        <p className="text-[12px] xl:leading-loose">{data.email.text}</p>
      </address>
    </div>
  );
};

export default ContactDetails;
