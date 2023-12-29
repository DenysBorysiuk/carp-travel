import Link from 'next/link';
import { NAV_LINKS } from '@/constants/links';
import { NavigationProps } from './type';

const Navigation = ({ variant, className }: NavigationProps) => {
  return (
    <nav className={`${variant === 'header' ? 'hidden md:block' : 'md:hidden'}`}>
      <ul className={`flex ${className}`}>
        {NAV_LINKS.map(({ key, href, title }) => (
          <li key={key}>
            <Link
              href={href}
              className="text-[18px] leading-[1.21] tracking-[1.4px] md:text-[14px]"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
