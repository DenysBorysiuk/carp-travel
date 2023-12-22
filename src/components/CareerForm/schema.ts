import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup.string().min(3, 'must be min 3 characters long').required(),
    email: yup.string().email().required(),
    position: yup.string(),
    phone: yup.string().required(),
    message: yup.string(),
  })
  .required();
