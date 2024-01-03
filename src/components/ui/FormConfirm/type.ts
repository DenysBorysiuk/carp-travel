import { FieldValues, UseFormRegister } from 'react-hook-form';

export type FormConfirmProps = {
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  isChecked: boolean;
};
