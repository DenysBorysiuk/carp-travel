import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup
      .string()
      .required('name is required')
      .matches(/^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/, 'Incorrect name'),
    email: yup.string().required('email is required').email('Invalid email'),
    position: yup.string(),
    phone: yup
      .string()
      .required('phone is required')
      .matches(/^\(\d{3}\) \d{3} \d{2} \d{2}$/, 'Incorrect phone'),

    confirm: yup.boolean(),
    message: yup.string(),
  })
  .required();
