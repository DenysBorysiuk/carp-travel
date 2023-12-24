import SectionTitle from '@/components/ui/SectionTitle';
import data from '@/data/gallery.json';

const GallerySection = () => {
  return (
    <section className="gallery-bg h-[800px]" id="gallery">
      <div className="container">
        <SectionTitle className={''} data={data.title} />
      </div>
    </section>
  );
};

export default GallerySection;
