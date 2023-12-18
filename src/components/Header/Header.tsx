import Logo from '@/components/ui/Logo';
import MobileMenu from '@/components/ui/MobileMenu';
import Navigation from '@/components/ui/Navigation';

const Header = () => {
  return (
    <header className="container flex items-center justify-between bg-slate-600">
      <Logo />
      <MobileMenu />
      <Navigation className={'hidden md:flex md:gap-[24px] xl:gap-[56px]'} />
    </header>
  );
};

export default Header;
