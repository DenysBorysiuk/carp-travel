import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup
      .string()
      .required('Incorrect name')
      .matches(/^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/, 'Incorrect name')
      .trim(),
    email: yup.string().required('Invalid email').email('Invalid email'),
    position: yup.string(),
    phone: yup.string().min(10, 'Incorrect phone').required('Incorrect phone'),
    confirm: yup.boolean(),
    message: yup.string(),
  })
  .required();
