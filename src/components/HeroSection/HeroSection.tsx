import Link from 'next/link';
import data from '@/data/hero.json';

const HeroSection = () => {
  return (
    <section className=" hero-bg pt-[105px] md:pt-[121px] xl:pt-[130px]">
      <div
        className="container flex flex-col flex-wrap md:h-[345px] md:gap-x-[48px]
        xl:h-[529px] xl:gap-x-[281px] smOnly:gap-[24px]"
      >
        <h1 className="w-[280px] md:mb-[68px] md:w-[426px] xl:mb-[148px] xl:w-[646px]">
          <span className="font-medium">{data.title.textAccent} </span>
          {data.title.text}
        </h1>
        <p
          className="w-[157px] text-[10px] leading-[1.6] md:w-[263px] md:text-[14px] md:leading-[1.14] 
          md:tracking-[1.26px] xl:w-[608px] xl:text-[16px] xl:leading-[1.5] xl:tracking-[1.44px]"
        >
          {data.resorts}
        </p>
        <p
          className="relative block h-[52px] w-[118px] text-[37px] font-thin uppercase leading-[1.21] tracking-[1.64px] first-letter:font-medium 
          first-letter:tracking-normal md:mb-[56px] md:h-[88px] md:w-[230px] md:text-[67px] xl:mb-[181px] xl:h-[123px] 
          xl:w-[305px] xl:text-[98px] smOnly:order-[-1] smOnly:ml-auto mdOnly:tracking-[8.71px]"
        >
          {data.subtitle.textLarge}
          <span
            className="absolute bottom-[-1px] block text-[12px] font-light tracking-[9.48px] md:text-[14px]
            md:tracking-[25.9px]  xl:text-[16px] xl:tracking-[36.48px]"
          >
            {data.subtitle.text}
          </span>
        </p>
        <p
          className="text-justify md:mb-[28px] md:w-[230px] xl:w-[294px]"
        >
          {data.text}
        </p>
        <Link
          href={data.link.href}
          className="frame relative flex h-[53px] items-center justify-center bg-white/10 text-[18px]
          font-bold uppercase hover:bg-white/20 focus:bg-white/20 md:h-[50px]
          md:w-[230px] xl:h-[71px] xl:w-[293px] xl:text-[32px]"
        >
          {data.link.label}
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
