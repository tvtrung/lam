import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';

interface MissionProps {
  className?: string;
  image: string;
  title: string;
  highlightText: string;
  content: React.ReactNode;
  number: string;
}

const Mission: React.FC<MissionProps> = ({ className: addClass, image, title, highlightText, content, number }) => {
  const className = mapModifiers('o-mission');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <section className={classNames}>
      <Container modifiers="medium" className="o-mission__container">
        <div className="o-mission__img-container">
          <Image
            src={image}
            modifiers="filled"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="o-mission__image a-animated-block a-bgslide-img"
            alt={title}
          />
          <span className="o-mission__number a-animate-character">{number}</span>
        </div>

        <div className="o-mission__content-wrapper">
          <Title
            modifiers={['underline', 'green']}
            className="o-mission__title a-bgslide-text a-animated-block"
            tag="h3"
          >
            <span>{title}</span>
          </Title>
          <p
            className={`o-mission__highlight a-animated-fadeinup a-delay-animated a-animated-block ${
              router.locale === 'vi' ? 'o-mission__text-align-justify' : ''
            }`}
          >
            {parse(highlightText)}
          </p>
          <Text
            className={`o-mission__content a-animated-fadeinup a-delay-animated-2 a-animated-block ${
              router.locale === 'vi' ? 'o-mission__text-align-justify' : ''
            }`}
          >
            {content}
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
