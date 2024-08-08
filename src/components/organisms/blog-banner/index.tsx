import Image from 'components/atoms/image';
import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';

interface BlogBannerProps {
  className?: string;
  modifiers?: ModifierProp<'one' | 'two'>;
  leftBgSrc: string;
  imageSrc: string;
}

const BlogBanner: React.FC<BlogBannerProps> = ({ className: addClass, modifiers, leftBgSrc, imageSrc }) => {
  const className = mapModifiers('o-blog-banner', modifiers);
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <div className="o-blog-banner__bg-left a-animated-block a-animated-fadein">
        <Image src={leftBgSrc} modifiers="filled" layout="fill" objectFit="cover" alt="" islazy={true} />
      </div>

      <div className="o-blog-banner__image a-animated-block a-animated-fadein a-delay-animated">
        <Image src={imageSrc} modifiers="filled" layout="fill" objectFit="cover" alt="" islazy={true} />
      </div>
    </section>
  );
};

export default BlogBanner;
