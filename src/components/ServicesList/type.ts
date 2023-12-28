export type ServicesListProps = {
  className?: string;
  list: string[];
  currentSlide: number;
  onButtonClick: (index: number) => void;
  slogan: string;
};
