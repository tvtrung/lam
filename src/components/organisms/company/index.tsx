import Button from 'components/atoms/button';
import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface CompanyProps {
  className?: string;
  innerTitle: string;
  title: string;
  link: string;
  location: string;
  content: React.ReactNode;
  image: string;
}

const Company: React.FC<CompanyProps> = ({
  className: addClass,
  innerTitle,
  title,
  link,
  location,
  content,
  image,
}) => {
  const className = mapModifiers('o-company');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();
  const [open, setHiddenContent] = useState(false);
  const router = useRouter();
  return (
    <section className={classNames}>
      <Container modifiers="medium">
        <Title className="o-company__title a-animated-block a-animated-fadeinup">
          <span>{title}</span>
        </Title>
      </Container>
      <Container className="o-company__wrapper">
        <div
          className={
            router.locale === 'vi'
              ? 'o-company__content-wrapper__vi a-animated-fadeinup a-animated-block a-delay-animated'
              : 'o-company__content-wrapper a-animated-fadeinup a-animated-block a-delay-animated'
          }
        >
          <div className="o-company__image">
            {image && (
              <Image
                src={image}
                modifiers="filled"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt={title}
              />
            )}
          </div>
          <div className="o-company__main">
            <h3 className="o-company__inner-title">
              <span>{innerTitle}</span>
            </h3>
            <a target="_blank" className="o-company__link" href={link}>
              {link}
            </a>
            <p className="o-company__location">{location}</p>
            <div className={mapClassnames('o-company__content', open && 'o-company__content--open')}>{content}</div>
            <Button
              className="o-company__button u-dn-pc"
              linkText={open ? t('show-less') : t('see-more')}
              modifiers="arrow-down"
              onClick={() => setHiddenContent(!open)}
            />
          </div>
        </div>
        <span className="o-company__title-bg">{innerTitle}</span>
      </Container>
    </section>
  );
};

export default Company;
