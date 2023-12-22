import { ErrorMsgProps } from './type';
import Cross from 'public/icons/cross.svg';

const ErrorMsg = ({ children }: ErrorMsgProps) => {
  return (
    <p
      className="absolute right-0 flex items-center gap-[4px] text-[12px] 
      leading-loose tracking-[2.4px] text-error"
    >
      <Cross />
      {children}
    </p>
  );
};

export default ErrorMsg;
