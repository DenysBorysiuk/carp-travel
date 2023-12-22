import * as yup from 'yup';
import { schema } from './schema';

export type FormData = yup.InferType<typeof schema>;

// export type FormData = {
//   name: string;
//   email: string;
//   message?: string;
// };
