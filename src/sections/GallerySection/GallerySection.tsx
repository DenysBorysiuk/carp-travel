import GallerySlider from '@/components/GallerySlider';
import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/gallery.json';

const GallerySection = () => {
  return (
    <section className="gallery-bg" id="gallery">
      <div className="container">
        <SectionTitle className={'mb-[24px]'} data={data.title} />
        <GallerySlider />
      </div>
    </section>
  );
};

export default GallerySection;
