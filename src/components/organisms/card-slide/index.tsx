import { mapClassnames } from 'helpers/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Icon from 'components/atoms/icon';
import { Children } from 'react';

interface CardSlideProps {
  className?: string;
  children: React.ReactNode;
}

const CardSlide: React.FC<CardSlideProps> = ({ className: addClass, children }) => {
  const classNames = mapClassnames('o-card-slide', addClass);
  const items = Children.toArray(children);

  return (
    <div className={classNames}>
      <div className="o-card-slide__nav-wrapper">
        <button aria-label="right" className="o-card-slide__prev o-card-slide__nav">
          <Icon iconName="arrow-right" />
        </button>
        <button aria-label="right" className="o-card-slide__next o-card-slide__nav">
          <Icon iconName="arrow-right" />
        </button>
      </div>
      <Swiper
        className="o-card-slide__swiper"
        modules={[Navigation]}
        navigation={{
          nextEl: '.o-card-slide__next',
          prevEl: '.o-card-slide__prev',
        }}
        spaceBetween={30}
        slidesPerView={3}
        breakpoints={{
          0: { spaceBetween: 16, slidesPerView: 1.129 },
          641: { spaceBetween: 8, slidesPerView: 2 },
          992: { spaceBetween: 8, slidesPerView: 3 },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide className="o-card-slide__item" key={idx}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlide;
