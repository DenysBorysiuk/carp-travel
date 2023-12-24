import FieldError from '@/components/ui/FieldError';
import { FieldProps } from './type';
import Checked from 'public/icons/checked.svg';
import Unchecked from 'public/icons/unchecked.svg';

const CheckBox = ({ type, name, label, register, errors, isChecked }: FieldProps) => {
  return (
    <label
      className={`checkbox relative flex gap-[8px] ${
        isChecked
          ? "before:bg-[url('/icons/checked.svg')]"
          : "before:bg-[url('/icons/unchecked.svg')]"
      }`}
    >
      <input
        className="h-[22px] w-[22px] cursor-pointer appearance-none md:h-[24px] md:w-[24px]"
        {...register(name)}
        type={type}
      />
      <span className="w-[250px] text-[12px] leading-[1.83]">{label}</span>
    </label>
  );
};

export default CheckBox;
