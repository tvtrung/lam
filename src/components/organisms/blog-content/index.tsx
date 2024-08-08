import { mapClassnames, mapModifiers } from 'helpers/components';

interface BlogContentProps {
  className?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ className: addClass, children }) => {
  const className = mapModifiers('o-blog-content');
  const classNames = mapClassnames(className, addClass);
  return <article className={classNames}>{children}</article>;
};

export default BlogContent;
