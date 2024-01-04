import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

export type FieldProps = {
  className?: string;
  id: string;
  variant?: 'sm' | 'md';
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  control: any;
};
