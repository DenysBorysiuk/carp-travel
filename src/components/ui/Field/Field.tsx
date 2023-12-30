import FieldError from '@/components/ui/FieldError';
import { FieldProps } from './type';

const Field = ({
  className,
  id,
  type,
  name,
  label,
  placeholder,
  register,
  errors,
  variant,
}: FieldProps) => {
  return (
    <div className="relative">
      <label
        className={`outline-none" mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]
        ${className} ${errors[name] ? 'text-error' : ''}`}
        htmlFor={variant ? id + variant : id}
      >
        {label}
      </label>
      <input
        className={`block h-[24px] w-full bg-white/5 px-[8px] font-extralight outline-none
              placeholder:text-[13px] placeholder:text-white/20  md:h-[24px] xl:h-[28px]
               xl:text-[20px]
              ${className} ${errors[name] ? 'text-error' : ''}`}
        {...register(name)}
        placeholder={placeholder}
        type={type}
        id={variant ? id + variant : id}
      />
      {errors[name] && <FieldError errors={errors} name={name} />}
    </div>
  );
};

export default Field;
