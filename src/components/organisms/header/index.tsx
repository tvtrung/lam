import { mapClassnames, mapModifiers } from 'helpers/components';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useIsSp } from 'utils/hooks';

interface MenuProps {
  link: string;
  title: string;
}

interface HeaderProps {
  image?: string;
  className?: string;
  menu: MenuProps[];
  language: string;
  recruitButtonText: string;
  onClickLanguage?: () => void;
  onClickRecruit?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  image,
  className: addClass,
  menu,
  language,
  recruitButtonText,
  onClickLanguage,
  onClickRecruit,
}) => {
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(false);
  const className = mapModifiers('o-header', isOpen && 'open');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();
  const isSP = useIsSp();

  useEffect(() => {
    document.body.style.setProperty('overflow', isOpen ? 'hidden' : 'auto');
  }, [isOpen]);

  return (
    <header className={classNames}>
      <div className="o-header__inner">
        <h1>
          <Link href="/">
            <a className="o-header__logo" style={{ backgroundImage: `url('/images/logo.png')` }}>
              LAMPART
            </a>
          </Link>
        </h1>
        <div>
          <ul className="o-header__menu">
            {menu.map((item, index) => (
              <li
                className={`o-header__menu-item ${pathname === item.link ? 'o-header__menu-active' : ''}`}
                key={index}
              >
                <Link href={item.link}>
                  <a className="o-header__menu-link">{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>

          {router.locale === 'vi' && (
            <button onClick={onClickRecruit} className="o-header__recruit-button">
              {recruitButtonText}
            </button>
          )}
          {(!isSP || (isSP && isOpen)) && (
            <button onClick={onClickLanguage} className="o-header__recruit-button language">
              {/* {language} */}
              {t('text_change_language')}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="hamburger"
            className={mapModifiers('o-header__hamburger', isOpen && 'open')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
