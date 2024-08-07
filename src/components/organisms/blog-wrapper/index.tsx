import Title from 'components/atoms/title';
import BlogNavigator from 'components/molecules/blog-navigator';
import BlogContent from 'components/organisms/blog-content';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { numberFormat } from 'utils/common';

interface BlogWrapperProps {
  className?: string;
  bgTitle: string;
  like: number;
  category: string;
  date: string;
  prevUrl?: string;
  nextUrl?: string;
  title: React.ReactNode;
}

const BlogWrapper: React.FC<BlogWrapperProps> = ({
  className: addClass,
  title,
  bgTitle,
  like,
  category,
  date,
  children,
  prevUrl,
  nextUrl,
}) => {
  const className = mapModifiers('o-blog-wrapper');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <div className="o-blog-wrapper__container">
        <div className="o-blog-wrapper__header">
          <div className="o-blog-wrapper__info">
            <span className="o-blog-wrapper__date">{date}</span>
            <span className="o-blog-wrapper__category">{category}</span>
          </div>
          {like > 0 && <div className="o-blog-wrapper__like"><span id="o-blog-wrapper__like">{numberFormat(like)}</span></div>}
        </div>
        <div className="o-blog-wrapper__body">
          <Title className="o-blog-wrapper__title" tag="h1">
            {title}
          </Title>
          <BlogContent>{children}</BlogContent>
        </div>

        <div className="o-blog-wrapper__navigator">
          <BlogNavigator prevUrl={prevUrl} nextUrl={nextUrl} />
        </div>
      </div>
      <div className="o-blog-wrapper__bg-title">{bgTitle}</div>
    </section>
  );
};

export default BlogWrapper;
