export type ServicesSlideProps = {
  title: { text: string; textAccent: string };
  list: string[];
  currentSlide: number;
  totalSlides: number;
  isActive: boolean;
  onSlideTo: (index: number) => void;
  img: {
    href: string;
    alt: string;
  };
  slogan: string;
  text: string;
};
