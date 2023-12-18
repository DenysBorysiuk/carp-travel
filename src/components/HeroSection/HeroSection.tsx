import data from '@/data/hero.json';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className=" bg-zinc-900 pb-[56px] pt-[105px]
      md:pb-[64px] md:pt-[121px] xl:pb-[104px] xl:pt-[130px]"
    >
      <div className="container flex flex-col gap-[24px] xl:max-w-screen-xl">
        <h1 className="w-[280px] md:w-[426px] xl:w-[646px]">
          <span className="font-medium">{data.title.textAccent} </span>
          {data.title.text}
        </h1>
        <p className="text-[10px] smOnly:w-[157px]">{data.resorts}</p>
        <p
          className="ml-auto block w-[118px] text-[37px] font-thin  uppercase
        leading-none tracking-[1.64px] first-letter:font-medium smOnly:order-[-1]"
        >
          {data.subtitle.textLarge}
          <span className="block text-[12px] font-light tracking-[9.48px]">
            {data.subtitle.text}
          </span>
        </p>
        <p>{data.text}</p>
        <Link
          href={data.link.href}
          className="frame relative flex h-[53px] items-center justify-center bg-white/10 text-[18px]
          font-bold uppercase hover:bg-white/20 focus:bg-white/20 md:h-[50px]
          md:w-[230px] xl:h-[71px] xl:w-[293px] xl:text-[32px]"
        >
          {data.link.title}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
