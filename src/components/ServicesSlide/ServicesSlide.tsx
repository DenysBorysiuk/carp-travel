import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { ServicesSlideProps } from './type';

const ServicesSlide = ({ title, img, slogan, text }: ServicesSlideProps) => {
  return (
    <div className="container">
      <SectionTitle className={''} data={title} />
      <span>01/05</span>
      <div className="relative h-[213px]">
        <Image src={img.href} alt={img.alt} fill priority />
      </div>
      <p>{slogan}</p>
      <ul>
        <li>
          <button type="button"></button>
        </li>
        <li>
          <button type="button"></button>
        </li>
        <li>
          <button type="button"></button>
        </li>
        <li>
          <button type="button"></button>
        </li>
        <li>
          <button type="button"></button>
        </li>
      </ul>
      <p>{text}</p>
    </div>
  );
};

export default ServicesSlide;
