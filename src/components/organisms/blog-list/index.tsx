import Button from 'components/atoms/button';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';

interface BlogListProps {
  className?: string;
  postNumber?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  viewMore?: boolean
}

const BlogList: React.FC<BlogListProps> = ({ className: addClass, children, postNumber, onClick, viewMore = true }) => {
  const className = mapModifiers('o-blog-list');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation('blog');
  return (
    <div className={classNames}>
      {children}
      {viewMore && (
        <Button
          className="o-blog-list__button"
          linkText={`${t('view-more')}${postNumber}${t('blog')}`}
          modifiers="arrow-down"
          onClick={e => onClick && onClick(e)}
        />
      )}
    </div>
  );
};

export default BlogList;
