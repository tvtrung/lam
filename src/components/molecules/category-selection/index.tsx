import Icon, { ICON_SHAPES } from 'components/atoms/icon';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';

interface CategorySelectionProps {
  className?: string;
  icon: (typeof ICON_SHAPES)[number];
  title: string;
  number: number;
}

const CategorySelection: React.FC<CategorySelectionProps> = ({ className: addClass, icon, title, number }) => {
  const className = mapModifiers('m-category-selection');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();

  return (
    <div className={classNames}>
      <h5 className="m-category-selection__title">
        <span className="m-category-selection__icon">
          <Icon iconName={icon} />
        </span>
        {title}
      </h5>
      <div className="m-category-selection__post">
        <span className="m-category-selection__num">{number} bài viết</span>
        {/* {t('posts')} */}
      </div>
    </div>
  );
};

export default CategorySelection;
