import FieldError from '@/components/ui/FieldError';
import { FieldProps } from './type';

const Field = ({ className, id, type, name, label, register, errors }: FieldProps) => {
  return (
    <div className={`relative ${className}`}>
      <input {...register('confirm')} id={id} type={type} />
      <label htmlFor={id}>{label}</label>
      {errors[name] && <FieldError errors={errors} name={name} />}
    </div>
  );
};

export default Field;
