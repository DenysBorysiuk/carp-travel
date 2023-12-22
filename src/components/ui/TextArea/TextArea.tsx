import { TextAreaProps } from './type';

const TextArea = ({ className, register }: TextAreaProps) => {
  return (
    <div>
      <label
        className="mb-[4px] block text-[12px] font-extralight leading-loose tracking-[2.4px]"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        className={`block w-full resize-none bg-white/5 px-[8px] outline-none 
             ${className}`}
        {...register('message')}
        id="message"
      />
    </div>
  );
};

export default TextArea;
