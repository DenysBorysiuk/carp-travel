import { ErrorMessage } from '@hookform/error-message';

import Cross from '~/icons/cross.svg';
import { FieldErrorProps } from './type';

export const FieldError = ({ errors, name }: FieldErrorProps) => {
  return (
    <p
      className="absolute right-0 flex items-center gap-[4px] text-[12px] 
      leading-loose tracking-[2.4px] text-error"
    >
      <Cross width={18} height={18} />
      <ErrorMessage errors={errors} name={name} />
    </p>
  );
};
