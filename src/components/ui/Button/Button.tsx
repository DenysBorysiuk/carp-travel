'use client';

import { ButtonProps } from './type';

const Button = ({ className, onClick, label, type }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={`block uppercase leading-[1.21] ${className}`}>
      {label}
    </button>
  );
};

export default Button;
