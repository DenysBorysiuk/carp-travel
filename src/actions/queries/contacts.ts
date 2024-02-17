import { groq } from 'next-sanity';

export const contactsQuery = groq`
   *[_type == "contact"][0] {
      phone1,
      phone2,
      email,
   }
`;
