import Image from 'components/atoms/image';
import FsLightbox from 'fslightbox-react';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useState } from 'react';

export interface GalleryProps {
  className?: string;
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ className: addClass, images }) => {
  const className = mapModifiers('m-gallery');
  const classNames = mapClassnames(className, addClass);
  const [lightboxController, setToggler] = useState({ toggler: false, slide: 1 });

  return (
    <div className={classNames}>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images.map((src, idx) => (
          <div><img className='width100percent' src={src} alt={`lightbox ${idx}`} /></div>
        ))}
        slide={lightboxController.slide} />
      {images.map((src, idx) => (
        <div className="m-gallery__img-wrapper a-animated-block a-animated-fadeinup" key={src}>
          <Image
            src={src}
            modifiers="filled"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="gallery"
            onClick={() => setToggler({ toggler: !lightboxController.toggler, slide: idx + 1 })}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
