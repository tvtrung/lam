import Icon from 'components/atoms/icon';
import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useRouter } from 'next/router';
import { Parallax } from 'react-scroll-parallax';

interface LogoListProps {
  logos: string[];
}

export const LogoList: React.FC<LogoListProps> = ({ logos }) => {
  return (
    <ul className="o-highlight-work__logo-list">
      {logos.map((item, index) => (
        <li className="o-highlight-work__logo-item" key={index}>
          <Image
            className="o-highlight-work__logo-image"
            src={item}
            modifiers="filled"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt=""
          />
        </li>
      ))}
    </ul>
  );
};

interface HighlightWorkProps {
  className?: string;
  image: string;
  title: React.ReactNode;
  id?: string;
}

const HighlightWork: React.FC<HighlightWorkProps> = ({ className: addClass, image, title, children, id }) => {
  const className = mapModifiers('o-highlight-work');
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <div className={classNames}>
      <div className="o-highlight-work__banner" id={id}>
        <Parallax speed={-12}>
          {image && (
            <Image
              src={image}
              modifiers="filled"
              layout="fill"
              objectFit="cover"
              alt={
                typeof title === 'string' ? title : ''
                // : (title as React.ReactElement)?.props.children.join('').replace('[object Object]', '')
              }
              className="a-animated-block a-animated-fadein"
            />
          )}
        </Parallax>
      </div>
      <Container className="o-highlight-work__container">
        <div
          className={
            router.locale === 'vi'
              ? 'o-highlight-work__wrapper__vi a-animated-block a-animated-fadeinup'
              : 'o-highlight-work__wrapper a-animated-block a-animated-fadeinup'
          }
        >
          <Title className="o-highlight-work__title" modifiers="highlight">
            <span>{title}</span>
          </Title>
          <dl className="o-highlight-work__list">{children}</dl>
          <button
            className="o-highlight-work__more-detail"
            onClick={e => {
              e?.preventDefault();
              const el = e?.currentTarget.closest('.o-highlight-work');
              el?.classList.toggle('o-highlight-work--show-more');
            }}
          >
            <Icon iconName="arrow-right" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default HighlightWork;
