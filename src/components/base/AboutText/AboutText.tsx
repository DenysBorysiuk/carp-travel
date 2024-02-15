import { AboutTextProps } from './type';

export const AboutText = ({ className = '', textAccent, text }: AboutTextProps) => {
  return (
    <p className={className}>
      <span className="font-normal">{textAccent} </span>
      {text}
    </p>
  );
};
