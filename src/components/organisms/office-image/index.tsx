import Image from 'components/atoms/image';
import { mapClassnames } from 'helpers/components';
import { Parallax } from 'react-scroll-parallax';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

interface OfficeImageProps {
  className?: string;
  images: {
    src: string;
    spsrc?: string;
  }[];
}

const OfficeImage: React.FC<OfficeImageProps> = ({ className: addClass, images }) => {
  const classNames = mapClassnames('o-office-image', addClass);

  return (
    <section className={classNames}>
      <Swiper
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 4250, disableOnInteraction: false }}
        effect="fade"
        loop
        className="o-office-image__swiper a-animated-block a-animated-fadein"
        slidesPerView={1}
        allowTouchMove={false}
      >
        {images.map((item, idx) => (
          <SwiperSlide className="o-office-image__item" key={idx}>
            <div className="o-office-image__image">
              <Parallax speed={-20}>
                <Image
                  alt="Office"
                  src={item.src}
                  spsrc={item.spsrc}
                  modifiers="filled"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Parallax>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default OfficeImage;
