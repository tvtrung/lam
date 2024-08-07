import Button from 'components/atoms/button';
import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import parse from 'html-react-parser';
interface Service {
  className?: string;
  title: string;
  content: string;
  linkUrl: string;
  logo: any[];
  isBlank?: boolean;
  buttonText: string;
}

const Service: React.FC<Service> = ({ className: addClass, title, content, linkUrl, logo, isBlank, buttonText }) => {
  const className = mapModifiers('o-service');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();

  return (
    <section className={classNames}>
      <Container>
        <Title className="o-service__title a-animated-fadeinup a-animated-block">
          <span>{title}</span>
        </Title>
        <div className="o-service__content a-animated-fadeinup a-animated-block">
          <p>{parse(content)}</p>
        </div>
        <Button
          className="o-service__button a-animated-fadeinup a-animated-block"
          linkUrl={linkUrl}
          linkText={buttonText}
          isBlank={isBlank}
        ></Button>
        <ul className="o-service__logo-list a-animated-fadeinup a-animated-block">
          {logo.map((item, index) => (
            <li className="o-service__logo-item" key={index}>
              <Image
                className="o-service__logo-image"
                src={item.service_image}
                modifiers="filled"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                alt=""
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Service;
