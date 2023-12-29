'use client';

import { MobileMenuBtnProps } from './type';

const MobileMenuBtn = ({ className, onClick, label, aria }: MobileMenuBtnProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block uppercase leading-[1.21] tracking-[1.4px] ${className}`}
    >
      {label}
    </button>
  );
};

export default MobileMenuBtn;
