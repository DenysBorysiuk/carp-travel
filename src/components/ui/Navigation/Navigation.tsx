import { NAV_LINKS } from '@/constants/links';
import Link from 'next/link';
import { NavigationProps } from './type';

const Navigation = ({ variant, className }: NavigationProps) => {
  return (
    <nav className={`${variant === 'header' ? 'hidden md:block' : ''}`}>
      <ul className={`flex ${className}`}>
        {NAV_LINKS.map(link => (
          <li key={link.key}>
            <Link href={link.href} className="leading-[1.21] tracking-[1.4px]">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
