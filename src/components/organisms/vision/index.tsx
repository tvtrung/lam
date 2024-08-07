import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useRouter } from 'next/router';

interface VisionProps {
  className?: string;
  title: string;
  innerTitle: React.ReactNode;
  titleBg: string;
  image: string;
  number: string;
}

const Vision: React.FC<VisionProps> = ({
  className: addClass,
  title,
  innerTitle,
  titleBg,
  image,
  number,
  children,
}) => {
  const className = mapModifiers('o-vision');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <section className={classNames}>
      <div className="o-vision__wrapper">
        <Container modifiers="medium" className="o-vision__container">
          <div className="o-vision__content-wrapper">
            <Title modifiers={['underline', 'green']} className="o-vision__title a-bgslide-text a-animated-block">
              <span>{title}</span>
            </Title>
            <p className={`o-vision__inner-title a-animated-fadeinup a-delay-animated a-animated-block ${router.locale === 'vi' ? 'o-vision__text-align-justify' : ''}`}>{innerTitle}</p>
            <div className={`o-vision__content a-animated-fadeinup a-delay-animated-2 a-animated-block ${router.locale === 'vi' ? 'o-vision__text-align-justify' : ''}`}>{children}</div>
          </div>
          <div className="o-vision__image">
            <Image
              src={image}
              modifiers="filled"
              layout="fill"
              objectFit="cover"
              alt={title}
              className="a-animated-block a-bgslide-img"
            />
            <span className="o-vision__number a-animate-character">{number}</span>
          </div>
        </Container>
      </div>
      <Container modifiers="medium" className="o-vision__title-bg-wrapper">
        <span className="o-vision__title-bg">{titleBg}</span>
      </Container>
    </section>
  );
};

export default Vision;
