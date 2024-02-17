import { type SchemaTypeDefinition } from 'sanity';

import contact from './schemas/contact';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact],
};
