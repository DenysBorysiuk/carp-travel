import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex flex-col gap-[2px]">
      <Image src="/icons/logo.png" width={59} height={21} alt="logo" priority />
      <p
        className="font-karantina text-[14px] font-normal
        leading-none tracking-[2.59px] text-white"
      >
        CarpTravel
      </p>
    </Link>
  );
};

export default Logo;
