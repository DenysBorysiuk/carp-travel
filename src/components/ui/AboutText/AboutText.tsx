import { AboutTextProps } from './type';

const AboutText = ({ className, data }: AboutTextProps) => {
  return (
    <p className={`${className}`}>
      <span className="font-normal">{data.textAccent} </span>
      {data.text}
    </p>
  );
};

export default AboutText;
