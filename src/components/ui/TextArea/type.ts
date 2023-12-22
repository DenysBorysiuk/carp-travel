import { FieldValues, UseFormRegister } from 'react-hook-form';

export type TextAreaProps = {
  className?: string;
  register: UseFormRegister<FieldValues>;
};
