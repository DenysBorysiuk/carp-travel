import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/icons/logo.svg" width={61} height={36} alt="logo" priority />
    </Link>
  );
};

export default Logo;
