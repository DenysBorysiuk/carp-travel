import { FieldValues, UseFormRegister } from 'react-hook-form';

export type TextAreaProps = {
  className?: string;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  variant?: 'sm' | 'md';
  register: UseFormRegister<FieldValues>;
};
