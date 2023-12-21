import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup.string().min(3, 'must be min 3 characters long').required(),
    email: yup.string().email().required(),
    message: yup.string(),
  })
  .required();
