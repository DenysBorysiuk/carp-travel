import { client } from 'sanity/client';
import { contactsQuery } from '@/actions/queries/contacts';

import { TContactsResponse } from '@/types';

export const getContacts = async (): Promise<TContactsResponse> => {
  const contacts: TContactsResponse = await client.fetch(contactsQuery);

  return contacts;
};
