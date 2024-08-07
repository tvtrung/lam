import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface Props {
  className?: string;
  title: React.ReactNode;
  image: string;
}

const FormThankyou: React.FC<Props> = ({ className: addClass, title, image, children }) => {
  const className = mapModifiers('o-form-thankyou');
  const classNames = mapClassnames(className, addClass);

  return (
    <section className={classNames}>
      <Image
        className="o-form-thankyou__image"
        modifiers="filled"
        layout="fill"
        src={image}
        objectFit="contain"
        objectPosition="center"
        alt={
          typeof title === 'string'
            ? title
            : (title as React.ReactElement)?.props.children.join('').replace('[object Object]', '')
        }
      />
      {title && <Title className="o-form-thankyou__title">{title}</Title>}
      {children && <p className="o-form-thankyou__text">{children}</p>}
    </section>
  );
};

export default FormThankyou;
