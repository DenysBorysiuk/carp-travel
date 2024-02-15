import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link className="h-[34px] w-[61px]" href="/" aria-label="Link to homepage">
      <Image
        className="h-full w-full"
        src="/icons/logo.png"
        width={61}
        height={34}
        alt="Company's logo"
        priority
      />
    </Link>
  );
};
