import { SectionTitleProps } from './type';

const SectionTitle = ({ className, data }: SectionTitleProps) => {
  return (
    <h2 className={`${className}`}>
      {data.text}
      <span className="font-medium"> {data.textAccent}</span>
    </h2>
  );
};

export default SectionTitle;
