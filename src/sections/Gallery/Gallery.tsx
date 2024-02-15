import GallerySlider from '@/components/base/GallerySlider';
import SectionTitle from '@/components/ui/SectionTitle';

import data from '@/data/gallery.json';

export const Gallery = () => {
  return (
    <section className="gallery-bg" id="gallery">
      <div className="container">
        <SectionTitle className={'mb-[24px] md:mb-[65px] xl:mb-[24px]'} {...data.title} />
      </div>

      <GallerySlider />
    </section>
  );
};
