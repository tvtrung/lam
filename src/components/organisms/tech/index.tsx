import Button from 'components/atoms/button';
import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import { LAYOUT_SP } from 'consts/common';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import { RefObject, useEffect, useRef, useState } from 'react';

interface TechItemProps {
  techImage: string;
  techTitle: string;
  techContent: string;
}
const TechItem: React.FC<TechItemProps> = ({ techTitle, techContent, techImage }) => {
  const { t } = useTranslation();
  // const techType = techTitle.toLowerCase().trim().replace(/\W\w*/, '');
  const [showMore, setShowMore] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const widthSp = LAYOUT_SP;

  useEffect(() => {
    const setOverflowedContent = (el: RefObject<HTMLLIElement>) => {
      const currentItem = el.current;
      const currentContent = currentItem?.querySelector('.o-tech__tech-content') as HTMLElement;
      const height = currentContent?.scrollHeight;
      if (window.innerWidth > widthSp) {
        // 81: Actual maximum visible size of the content on PC
        if (height && height <= 81) currentItem?.classList.add('o-tech__tech-item--default');
      } else {
        // 81: Actual maximum visible size of the content on SP
        if (height && height <= 188) currentItem?.classList.add('o-tech__tech-item--default');
      }
    };

    window.addEventListener('resize', () => setOverflowedContent(ref));
    setOverflowedContent(ref);
    return () => {
      window.removeEventListener('resize', () => setOverflowedContent(ref));
    };
  }, []);

  return (
    <li ref={ref} className={mapModifiers('o-tech__tech-item', showMore ? 'showmore' : '')} key={techTitle}>
      <div className="o-tech__logo-wrapper">
        <Image
          className="o-tech__logo-image"
          src={techImage}
          modifiers="filled"
          layout="fill"
          objectFit="contain"
          alt={techTitle}
        />
      </div>

      <div className="o-tech__content-wrapper">
        <Title className="o-tech__tech-title" tag="h3">
          {techTitle}
        </Title>
        <Text className="o-tech__tech-content">{techContent}</Text>
        <Button
          className="o-tech__tech-button"
          linkText={showMore ? t('show-less') : t('see-more')}
          onClick={() => setShowMore(!showMore)}
          modifiers="arrow-down"
        />
      </div>
    </li>
  );
};

interface TechProps {
  className?: string;
  title: string;
  image: string;
  techs: TechItemProps[];
}

const Tech: React.FC<TechProps> = ({ className: addClass, title, image, techs }) => {
  const className = mapModifiers('o-tech');
  const classNames = mapClassnames(className, addClass);

  return (
    <section className={classNames}>
      <Title className="o-tech__title u-dn-pc a-animated-block a-animated-fadeinup">
        <span>{title}</span>
      </Title>

      <div className="o-tech__image-wrapper">
        <Image
          className="o-tech__image a-animated-block a-animated-fadein"
          src={image}
          modifiers="filled"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          alt={title}
        />
      </div>
      <div className="o-tech__container">
        <Title className="o-tech__title u-dn-sp a-animated-block a-animated-fadeinup">
          <span>{title}</span>
        </Title>
        <ul className="o-tech__tech-list a-animated-block a-animated-fadeinup a-delay-animated">
          {techs.map(({ techTitle, techContent, techImage }) => (
            <TechItem techImage={techImage} key={techTitle} techTitle={techTitle} techContent={techContent} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tech;
