import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup
      .string()
      .required('name is required')
      .matches(/^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/, 'Incorrect name'),
    email: yup.string().required('email is required').email('Invalid email'),
    message: yup.string(),
  })
  .required();
