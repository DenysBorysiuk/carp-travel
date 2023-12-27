export type ServicesSlideProps = {
  title: { text: string; textAccent: string };
  list: string[];
  currentSlide: number;
  onButtonClick: (index: number) => void;
  img: {
    href: string;
    alt: string;
  };
  slogan: string;
  text: string;
};
