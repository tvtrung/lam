import Link from 'next/link';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';
import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import parse from 'html-react-parser';

interface BlogBannerProps {
  linkUrl: string;
  publishDate: string;
  topic: string;
  blogTitle: string;
  blogImageSrc: string;
}

const BlogBanner: React.FC<BlogBannerProps> = ({ linkUrl, publishDate, topic, blogTitle, blogImageSrc }) => {
  return (
    <Link href={linkUrl}>
      <a className="o-blog-related__blog-banner">
        <div className="o-blog-related__blog-img">
          <Image
            src={blogImageSrc}
            modifiers="filled"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={topic}
          />
        </div>
        <div className="o-blog-related__blog-content">
          <Text className="o-blog-related__date" asSpan>
            {publishDate}
          </Text>
          <Text className="o-blog-related__topic" asSpan modifiers="green">
            {topic}
          </Text>
          <Title className="o-blog-related__blog-title" tag="h3">
            {parse(blogTitle)}
          </Title>
        </div>
      </a>
    </Link>
  );
};

interface BlogRelatedProps {
  className?: string;
  bgTitle?: string;
  title: string;
  blogList: BlogBannerProps[];
}

const BlogRelated: React.FC<BlogRelatedProps> = ({ className: addClass, bgTitle, title, blogList }) => {
  const className = mapModifiers('o-blog-related');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <div className="o-blog-related__bg-title">{bgTitle}</div>
      <div className="o-blog-related__wrapper">
        <div className="o-blog-related__content">
          <Title className="o-blog-related__title">{title}</Title>
          <div className="o-blog-related__blog-list">
            {blogList.map(({ linkUrl, publishDate, topic, blogTitle, blogImageSrc }, idx) => (
              <BlogBanner
                key={`blog-${idx}`}
                linkUrl={linkUrl}
                publishDate={publishDate}
                topic={topic}
                blogTitle={blogTitle}
                blogImageSrc={blogImageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogRelated;
