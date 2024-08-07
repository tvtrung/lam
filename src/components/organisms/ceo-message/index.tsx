import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useRouter } from 'next/router';
import React from 'react';

interface CeoMessageProps {
  className?: string;
  image: string;
  imageSP?: string;
  title: string;
  label: string;
  author: string;
  position?: string;
}

const CeoMessage: React.FC<CeoMessageProps> = ({
  className: addClass,
  image,
  imageSP,
  title,
  label,
  author,
  position,
  children,
}) => {
  const className = mapModifiers('o-ceo-message');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <section className={classNames}>
      <Container className="o-ceo-message__heading">
        <Title className="o-ceo-message__title" tag="h2">
          {title}
        </Title>
        <span className="o-ceo-message__label">{label}</span>
      </Container>
      <div className={`o-ceo-message__body ${router.locale === 'ja' ? 'o-ceo-message__body__ja' : ''}`}>
        <Image
          className="o-ceo-message__image"
          spsrc={imageSP}
          src={image}
          modifiers="filled"
          objectFit="contain"
          layout="fill"
          alt={title}
          />
        <Container className="o-ceo-message__container">
          {children}
          <div className="o-ceo-message__footer">
            {author && <span className="o-ceo-message__author">{author}</span>}
            {position && <span className="o-ceo-message__position">| {position}</span>}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default CeoMessage;
