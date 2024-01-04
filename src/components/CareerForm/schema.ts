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
    phone: yup
      .string()
      .matches(/^\(\d{3}\) \d{2} \d{2} \d{3}$/, 'Incorrect phone')
      .required('Incorrect phone'),
    confirm: yup.boolean().required('confirm is required').oneOf([true], 'Must be confirmed.'),
    message: yup.string(),
  })
  .required();
