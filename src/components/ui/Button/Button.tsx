'use client';

import { ButtonProps } from './type';

export const Button = ({ className = '', onClick, label, type }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-anim block uppercase leading-[1.21] ${className}`}
    >
      {label}
    </button>
  );
};
