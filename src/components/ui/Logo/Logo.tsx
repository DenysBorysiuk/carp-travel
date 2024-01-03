import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex w-[61px] flex-col gap-[2px]" aria-label="Company logo">
      <Image src="/icons/logo.png" width={61} height={34} alt="logo" priority />
    </Link>
  );
};

export default Logo;
