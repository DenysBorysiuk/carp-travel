import { TContactsResponse } from '@/types';
import { transformPhoneNumber } from '@/utils/transformPhoneNumber';

import data from '@/data/contacts.json';

export const ContactDetails = ({ email, phone1, phone2 }: TContactsResponse) => {
  return (
    <div className="smOnly:ml-auto smOnly:w-[280px]">
      <div className="mb-[24px] flex justify-end gap-[20px] md:ml-[30px] xl:mb-[64px]">
        <ul>
          {[phone1, phone2].map(phone => (
            <li key={phone}>
              <a className="contacts-link" href={phone}>
                {transformPhoneNumber(phone)}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-[4px] text-[12px] leading-[1.66] xl:mt-[3px] xl:leading-loose">
          {data.phones.text}
        </p>
      </div>

      <address className="flex items-center gap-[20px] not-italic smOnly:ml-[16px]">
        <a className="contacts-link" href={email}>
          {email}
        </a>

        <p className="text-[12px] xl:leading-loose">{data.email.text}</p>
      </address>
    </div>
  );
};
