import Button from 'components/atoms/button';
import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';

interface MessageProps {
  className?: string;
  name: string;
  title: string;
  content: React.ReactNode;
  linkUrl: string;
  image: string;
  isBlank?: boolean;
  button_text: string;
}

const Message: React.FC<MessageProps> = ({
  className: addClass,
  name,
  title,
  content,
  linkUrl,
  image,
  isBlank,
  button_text,
}) => {
  const className = mapModifiers('o-message');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();

  return (
    <section className={classNames}>
      <Container className="o-message__container">
        <div className="o-message__image-wrapper a-animated-fadeinup a-animated-block">
          {image && (
            <Image
              className="o-message__image"
              alt={title}
              src={image}
              modifiers="filled"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          )}
        </div>
        <div className="o-message__info a-animated-fadeinup a-animated-block">
          <p className="o-message__name">
            <span>{name}</span>
          </p>
          <Title className="o-message__title">
            <span>{title}</span>
          </Title>
          <p className="o-message__content">{content}</p>
          <Button linkText={button_text} linkUrl={linkUrl} isBlank={isBlank} />
        </div>
      </Container>
    </section>
  );
};

export default Message;
