import data from '@/data/hero.json';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-[24px] bg-zinc-900 pb-[56px] pt-[105px]">
      <h1 className="w-[280px]">
        <span className="font-medium">{data.title.textAccent} </span>
        {data.title.text}
      </h1>
      <p>{data.resorts}</p>
      <p
        className="ml-auto block w-[118px] text-[37px] font-thin  uppercase
        leading-none tracking-[1.64px] first-letter:font-medium smOnly:order-[-1]"
      >
        {data.subtitle.textLarge}
        <span className="block text-[12px] font-light tracking-[9.48px]">{data.subtitle.text}</span>
      </p>
      <p>{data.text}</p>
      <Link href={data.link.href}>{data.link.title}</Link>
    </section>
  );
};

export default HeroSection;
