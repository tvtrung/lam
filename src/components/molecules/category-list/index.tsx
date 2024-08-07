import Icon, { ICON_SHAPES } from 'components/atoms/icon';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';

interface ItemProps {
  icon: typeof ICON_SHAPES[number];
  label: string;
  amount: string;
  linkCat: string;
  active?: boolean;
}

interface CategoryListProps {
  className?: string;
  list: ItemProps[];
}

const CategoryList: React.FC<CategoryListProps> = ({ className: addClass, list }) => {
  const className = mapModifiers('m-category-list');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={classNames}>
      <button className="m-category-list__button" onClick={() => setOpen(!isOpen)}>
        {t('category')}
        <Icon iconName="triangle" />
      </button>
      <ul className={`m-category-list__wrapper ${isOpen ? 'm-category-list__wrapper--open' : ''}`}>
        {list.map((item, key) => (
          <li
            className={mapClassnames('m-category-list__item', item.active && 'm-category-list__item--active')}
            key={key}
            onClick={() => setOpen(false)}
          >
            <Link href={item.linkCat}>
              <a className="m-category-list__link">
                <div className="m-category-list__icon">
                  <Icon iconName={item.icon} />
                </div>
                <Title className="m-category-list__label" tag="h4">
                  {item.label}
                </Title>
                <Text className="m-category-list__amount" asSpan>
                  {item.amount}
                </Text>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
