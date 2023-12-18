import Logo from '@/components/ui/Logo';
import MobileMenu from '@/components/ui/MobileMenu';
import Navigation from '@/components/ui/Navigation';

const Header = () => {
  return (
    <header
      className="container flex items-center justify-between bg-slate-600
      pt-[36px] md:pt-[24px] "
    >
      <Logo />
      <MobileMenu />
      <Navigation variant={'header'} className={'md:gap-[24px] xl:gap-[56px]'} />
    </header>
  );
};

export default Header;
