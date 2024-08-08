import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface BlogHeroProps {
  className?: string;
  title: string;
  image: string;
  bgImage: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ className: addClass, title, image, bgImage }) => {
  const className = mapModifiers('o-blog-hero');
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <div className="o-blog-hero__bg a-animated-block a-animated-fadein">
        <Image src={bgImage} modifiers="filled" layout="fill" objectFit="cover" alt="" islazy={true} />
      </div>
      <div className="o-blog-hero__content">
        <h1 className="o-blog-hero__main-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 311 150"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
          >
            <g mask="url(#blog-title)">
              <image
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="311"
                height="150"
                xlinkHref="/images/blog-heading.png"
              ></image>
              <mask id="blog-title">
                <path
                  d="M14.894405,131.746734v-89.824128q48.489091-8.009794,48.489091,15.161398C62.811367,75,52.226995,79.397003,22.190263,79.397003c9.154052,1.430321,44.626001-6.007347,45.484193,20.596615.286064,19.166295-28.606409,24.601512-53.780051,17.44991"
                  transform="translate(.000001 0.000002)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeLinecap="square"
                  strokeDashoffset="322.399461"
                  strokeDasharray="322.399461"
                />
                <path
                  d="M92.562034,35.91526v82.52827h49.203027"
                  transform="translate(.000001 0)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeLinecap="square"
                  strokeDashoffset="131.731297"
                  strokeDasharray="131.731297"
                />
                <path
                  d="M185.532868,41.636542c-6.865539-.286064-33.349488-1.508793-33.041628,44.300702c0,14.056376,11.300758,34.511184,32.755565,34.511184s28.777707-21.305494,31.753115-34.511184c.47678-19.413125.286064-42.870381-31.467052-44.300702Z"
                  transform="translate(.000001 0)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeDashoffset="233.08618"
                  strokeDasharray="233.08618"
                />
                <path
                  d="M301.674896,41.922608q-30.322796-7.437669-48.05877,6.007344c-17.735974,13.445013-12.014692,42.909615-11.1565,47.486641q11.1565,28.606411,53.780051,23.026936l-.000001-38.497945"
                  transform="translate(.000003 0.000001)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeLinecap="square"
                  strokeDashoffset="203.660698"
                  strokeDasharray="203.660698"
                />
              </mask>
            </g>
          </svg>
        </h1>
        <div className="o-blog-hero__image a-animated-block a-animated-fadein a-delay-animated">
          <Image src={image} modifiers="filled" layout="fill" objectFit="cover" alt={title} islazy={true} />
        </div>
        <Title
          tag="h2"
          modifiers="underline"
          className="o-blog-hero__title a-animated-block a-bgslide-text a-delay-animated"
        >
          <span>{title}</span>
        </Title>
      </div>
    </div>
  );
};

export default BlogHero;
