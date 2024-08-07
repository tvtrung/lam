import Icon from 'components/atoms/icon';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { SOCIAL_LIST } from 'consts/common';
import Link from 'next/link';

interface SocialProps {
  className?: string;
  title?: string;
}

const Social: React.FC<SocialProps> = ({ className: addClass, title }) => {
  const className = mapModifiers('o-social');
  const classNames = mapClassnames(className, addClass);

  return (
    <div className={classNames}>
      <Title className="o-social__title">{title}</Title>
      <ul className="o-social__list">
        {SOCIAL_LIST.map((v, i) => (
          <li key={i} className="o-social__item">
            <Link href={v.url}>
              <a target="_blank" className={mapClassnames('o-social__link', `o-social__link--${v.title}`)}>
                <Icon iconName={v.title} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
