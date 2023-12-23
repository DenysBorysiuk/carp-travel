import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup.string().required('name is required').min(3, 'min 3 characters'),
    email: yup.string().required('email is required').email('Invalid email'),
    message: yup.string(),
  })
  .required();
