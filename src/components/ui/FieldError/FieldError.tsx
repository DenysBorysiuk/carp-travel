import { ErrorMessage } from '@hookform/error-message';

import Cross from 'public/icons/cross.svg';
import { FieldErrorProps } from './type';

const FieldError = ({ errors, name }: FieldErrorProps) => {
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
