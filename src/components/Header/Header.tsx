import Logo from '@/components/ui/Logo';
import MobileMenu from '@/components/ui/MobileMenu';
import Navigation from '@/components/ui/Navigation';

const Header = () => {
  return (
    <header className="absolute left-0 right-0 top-0 ">
      <div
        className="container flex items-center justify-between
        pt-[36px] md:pt-[24px]"
      >
        <Logo />
        <MobileMenu />
        <Navigation variant={'header'} className={'md:gap-[24px] xl:gap-[56px]'} />
      </div>
    </header>
  );
};

export default Header;
