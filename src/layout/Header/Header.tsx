import { Logo } from '@/components/ui';
import { MobileMenu, Navigation } from '@/components/base';

export const Header = () => {
  return (
    <header className="absolute top-0 w-full pt-[36px] md:pt-[24px]">
      <div className="container mx-auto  flex  items-center justify-between">
        <Logo />

        <MobileMenu />

        <Navigation variant="header" className="pt-6 md:gap-[24px] xl:gap-[56px]" />
      </div>
    </header>
  );
};
