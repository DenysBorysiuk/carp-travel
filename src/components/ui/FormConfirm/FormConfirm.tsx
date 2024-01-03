import { FormConfirmProps } from './type';

const FormConfirm = ({ type, name, label, register, isChecked }: FormConfirmProps) => {
  return (
    <label
      className={`checkbox relative flex gap-[8px] smOnly:mb-[16px] ${
        isChecked
          ? "before:bg-[url('/icons/checked.svg')]"
          : "before:bg-[url('/icons/unchecked.svg')]"
      }`}
    >
      <input
        className="h-[22px] w-[22px] cursor-pointer appearance-none xl:h-[24px] xl:w-[24px]"
        {...register(name)}
        type={type}
      />
      <span className="w-[250px] text-[12px] font-extralight leading-[1.83] md:w-[192px] xl:w-[258px]">
        {label}
      </span>
    </label>
  );
};

export default FormConfirm;
