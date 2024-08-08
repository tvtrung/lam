import Button from 'components/atoms/button';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';

interface BlogNavigatorProps {
  className?: string;
  prevUrl?: string;
  nextUrl?: string;
}

const BlogNavigator: React.FC<BlogNavigatorProps> = ({ className: addClass, prevUrl, nextUrl }) => {
  const className = mapModifiers('m-blog-navigator');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();
  return (
    <div className={classNames}>
      {prevUrl && (
        // <Button
        //   linkText={t('pre-post')}
        //   linkUrl={prevUrl}
        //   className="m-blog-navigator__pre"
        //   isReverse
        //   modifiers="arrow-left"
        // />
        <Button
          linkText="Bài trước"
          linkUrl={prevUrl}
          className="m-blog-navigator__pre"
          isReverse
          modifiers="arrow-left"
        />
      )}
      <Button
        linkText="BLOG"
        linkUrl="/blog"
        className="m-blog-navigator__center"
        noIcon
        modifiers={['fill', 'black']}
      />
      {/* {nextUrl && <Button linkText={t('next-post')} linkUrl={nextUrl} className="m-blog-navigator__next" />} */}
      {nextUrl && <Button linkText="Bài sau" linkUrl={nextUrl} className="m-blog-navigator__next" />}
    </div>
  );
};

export default BlogNavigator;
