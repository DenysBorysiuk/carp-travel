import FieldError from '../FieldError';
import { FieldProps } from './type';

const Field = ({ className, id, type, name, label, placeholder, register, errors }: FieldProps) => {
  return (
    <div className="relative">
      <label
        className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px] outline-none "
        htmlFor="name"
      >
        {label}
      </label>
      <input
        className={`block h-[24px] w-full bg-white/5 px-[8px] font-extralight outline-none
              placeholder:text-[13px] placeholder:text-white/20 md:h-[28px] xl:text-[20px]
              ${className} ${errors[name] ? 'text-error' : ''}`}
        {...register(name)}
        placeholder={placeholder}
        type={type}
        id={id}
      />

      {errors[name] && <FieldError errors={errors} name={name} />}
    </div>
  );
};

export default Field;
