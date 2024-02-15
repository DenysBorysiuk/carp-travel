import { ServicesSloganProps } from './type';

export const ServicesSlogan = ({ className = '', slogan }: ServicesSloganProps) => {
  return <p className={`text-[12px] leading-loose tracking-[2.4px] ${className}`}>{slogan}</p>;
};
