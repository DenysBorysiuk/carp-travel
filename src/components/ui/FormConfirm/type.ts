import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

export type FormConfirmProps = {
  className?: string;
  type: string;
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isChecked: boolean;
};