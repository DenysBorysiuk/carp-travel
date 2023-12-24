import * as yup from 'yup';

export const schema = yup
  .object({
    userName: yup.string().required('name is required').min(3, 'min 3 characters'),
    email: yup.string().required('email is required').email('Invalid email'),
    position: yup.string(),
    phone: yup.string().required('phone is required'),
    confirm: yup.boolean().required('confirm is required').oneOf([true], 'Must be confirmed.'),
    message: yup.string(),
  })
  .required();
