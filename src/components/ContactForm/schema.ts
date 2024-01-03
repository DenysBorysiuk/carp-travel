import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup
      .string()
      .required('Incorrect name')
      .matches(/^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/, 'Incorrect name')
      .trim(),
    email: yup.string().required('Invalid email').email('Invalid email'),
    message: yup.string(),
  })
  .required();
