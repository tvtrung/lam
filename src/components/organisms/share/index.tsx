import Icon from 'components/atoms/icon';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { SOCIAL_LIST } from 'consts/common';
import Link from 'next/link';
import { useState } from 'react';

interface SocialProps {
  className?: string;
  url: string;
}

const Share: React.FC<SocialProps> = ({ className: addClass, url }) => {
  const className = mapModifiers('o-share');
  const classNames = mapClassnames(className, addClass);
  const [open, setOpen] = useState(false);

  return (
    <div className={classNames}>
      <ul className={`o-share__list ${open ? 'o-share__list--open' : ''}`}>
        {SOCIAL_LIST.map((v, i) => {
          return (
            <li key={i} className="o-share__item">
              <Link href={v.url}>
                <a target="_blank" className={mapClassnames('o-share__link', `o-share__link--${v.title}`)}>
                  <Icon iconName={v.title} />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setOpen(!open)} className={`o-share__button ${open ? 'o-share__button--active' : ''}`}>
        <Icon iconName="share" />
      </button>
    </div>
  );
};

export default Share;
