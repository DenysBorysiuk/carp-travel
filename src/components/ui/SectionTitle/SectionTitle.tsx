import { SectionTitleProps } from './type';

export const SectionTitle = ({ className = '', text, textAccent }: SectionTitleProps) => {
  return (
    <h2 className={`${className}`}>
      {text}
      <span className="font-medium"> {textAccent}</span>
    </h2>
  );
};
