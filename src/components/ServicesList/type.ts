export type ServicesListProps = {
  className?: string;
  list: string[];
  currentSlide: number;
  onSlideTo: (index: number) => void;
  slogan: string;
};
