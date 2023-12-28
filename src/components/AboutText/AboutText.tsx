import { AboutTextProps } from './type';

const AboutText = ({ className, textAccent, text }: AboutTextProps) => {
  return (
    <p className={`${className}`}>
      <span className="font-normal">{textAccent} </span>
      {text}
    </p>
  );
};

export default AboutText;
