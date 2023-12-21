import data from '@/data/contacts.json';

const ContactDetails = () => {
  return (
    <div className="mb-[24px]">
      <div className="mb-[24px] flex justify-end gap-[20px]">
        <ul>
          {data.phones.numbers.map(number => (
            <li key={number.label}>
              <a className="contacts-link" href={number.href}>
                {number.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[12px] xl:leading-loose">{data.phones.text}</p>
      </div>
      <address className="ml-[16px] flex gap-[20px] not-italic">
        <a className="contacts-link" href={data.email.href}>
          {data.email.label}
        </a>
        <p className="text-[12px] xl:leading-loose">{data.email.text}</p>
      </address>
    </div>
  );
};

export default ContactDetails;
