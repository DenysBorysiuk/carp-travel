import { TextAreaProps } from './type';

export const TextArea = ({ className = '', id, name, label, register, variant }: TextAreaProps) => {
  return (
    <div>
      <label
        className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]"
        htmlFor={variant ? id + variant : id}
      >
        {label}
      </label>

      <textarea
        className={`block w-full resize-none bg-white/5 px-[8px] outline-none ${className}`}
        id={variant ? id + variant : id}
        {...register(name)}
      />
    </div>
  );
};
