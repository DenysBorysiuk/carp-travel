import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex w-[61px] flex-col gap-[2px]" aria-label="Company logo">
      <Image src="/icons/logo.png" width={59} height={21} alt="logo" priority />
      <span className="font-karantina font-normal leading-none tracking-[2.59px]">CarpTravel</span>
    </Link>
  );
};

export default Logo;
