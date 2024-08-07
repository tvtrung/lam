import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useRouter } from 'next/router';

interface PolicyProps {
  className?: string;
  title: string;
  innerTitle: React.ReactNode;
  image: string;
  number: string;
}

const Policy: React.FC<PolicyProps> = ({ className: addClass, title, innerTitle, image, number, children }) => {
  const className = mapModifiers('o-policy');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <section className={classNames}>
      <Container modifiers="medium" className="o-policy__wrapper">
        <div className={`o-policy__content-wrapper`}>
          <Title modifiers={['underline', 'green']} className={`o-policy__title a-bgslide-text a-animated-block `}>
            <span>{title}</span>
          </Title>
          <p className={`o-policy__inner-title a-animated-fadeinup a-delay-animated a-animated-block ${router.locale === 'vi' ? 'o-policy__text-align-justify' : ''}`}>{innerTitle}</p>
          <div className={`o-policy__content a-animated-fadeinup a-delay-animated-2 a-animated-block ${router.locale === 'vi' ? 'o-policy__text-align-justify' : ''}`}>{children}</div>
        </div>
        <div className="o-policy__image">
          <Image
            src={image}
            modifiers="filled"
            layout="fill"
            objectFit="cover"
            alt={title}
            className="a-animated-block a-bgslide-img"
          />
          <span className="o-policy__number a-animate-character">{number}</span>
          <div className="o-policy__image-bg"></div>
        </div>
      </Container>
    </section>
  );
};

export default Policy;
