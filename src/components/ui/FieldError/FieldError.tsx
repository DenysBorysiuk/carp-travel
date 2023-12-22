import { ErrorMsgProps } from './type';
import Cross from 'public/icons/cross.svg';
import { ErrorMessage } from '@hookform/error-message';

const FieldError = ({ errors, name }: ErrorMsgProps) => {
  return (
    <p
      className="absolute right-0 flex items-center gap-[4px] text-[12px] 
      leading-loose tracking-[2.4px] text-error"
    >
      <Cross />
      <ErrorMessage errors={errors} name={name} />
    </p>
  );
};

export default FieldError;
