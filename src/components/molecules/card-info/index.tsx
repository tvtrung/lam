import { mapClassnames, mapModifiers } from 'helpers/components';
import Image from 'components/atoms/image';
import Button from 'components/atoms/button';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Title from 'components/atoms/title';

export interface CardInfoProps {
  className?: string;
  image: string;
  title: React.ReactNode;
  content: React.ReactNode;
  number: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const CardInfo: React.FC<CardInfoProps> = ({ className: addClass, image, title, content, number, onClick }) => {
  const [showMore, setShowMore] = useState(false);
  const className = mapModifiers('m-card-info', showMore && 'showmore');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();

  return (
    <article className={classNames}>
      <div className="m-card-info__image">
        <Image
          // alt={
          //   typeof title === 'string'
          //     ? title
          //     : (title as React.ReactElement)?.props.children.join('').replace('[object Object]', '')
          // }
          alt={typeof title === 'string' ? title : ''}
          src={image}
          modifiers="filled"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <span className="m-card-info__number">{number}</span>
      </div>
      <div className="m-card-info__body">
        <Title className="m-card-info__title" tag="h3">
          {title}
        </Title>
        <div className="m-card-info__content">{content}</div>
        <Button
          linkText={t(showMore ? 'show-less' : 'see-more')}
          modifiers="arrow-down"
          onClick={e => {
            setShowMore(!showMore);
            onClick && onClick(e);
          }}
          className="m-card-info__button"
        />
      </div>
    </article>
  );
};

export default CardInfo;
