import Image from 'components/atoms/image';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface JobHeroProps {
  className?: string;
  title: string;
  image: string;
  leftBg: string;
}

const JobHero: React.FC<JobHeroProps> = ({ className: addClass, title, image, leftBg }) => {
  const className = mapModifiers('o-job-hero');
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <div className="o-job-hero__bg a-animated-block a-animated-fadein">
        <Image src={leftBg} modifiers="filled" layout="fill" objectFit="cover" alt={title} islazy={true} />
      </div>
      <div className="o-job-hero__content">
        <h1 className="o-job-hero__big-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 264 150"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
          >
            <g mask="url(#job-title)">
              <image
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="264"
                height="150"
                xlinkHref="/images/jobs-heading.png"
              ></image>
              <mask id="job-title">
                <path
                  d="M16.699675,33.36039v77.435065q0,17.532467-12.662337,31.603896"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeDashoffset="112.297197"
                  strokeDasharray="112.297197"
                />
                <path
                  d="M76.602273,39.204545q-32.386363.487014-31.655844,44.561689c0,36.769479,27.02922,37.256492,35.795454,36.769479c19.480517,0,28.003246-20.69805,28.003246-36.76948s-1.222965-44.945527-32.142856-44.561688Z"
                  transform="translate(.000003 0.000004)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeDashoffset="236.374974"
                  strokeDasharray="236.374974"
                />

                <path
                  d="M136.722403,129.301948l.025974-88.097399q48.701298-6.631562,48.701298,16.019477q3.071016,21.65104-41.63961,21.65104q47.483764-1.196497,44.561687,20.232077c1.46104,7.548701-2.922077,26.055195-51.623375,19.428574"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeDashoffset="318.305322"
                  strokeDasharray="318.305322"
                />

                <path
                  d="M257.771104,41.204549q-46.996754-6.631562-48.701299,16.019477c-5.626625,27.376619,48.701299,17.775973,44.074674,41.883116c4.626625,30.194805-51.675325,17.428574-51.675325,17.428574"
                  transform="translate(.000002 0.000001)"
                  fill="none"
                  stroke="#3f5787"
                  strokeWidth="15"
                  strokeDashoffset="189.61631"
                  strokeDasharray="189.61631"
                />
              </mask>
            </g>
          </svg>
        </h1>

        <div className="o-job-hero__image a-animated-block a-animated-fadein a-delay-animated">
          <Image src={image} modifiers="filled" layout="fill" objectFit="cover" alt={title} islazy={true} />
        </div>
        <Title
          tag="h2"
          modifiers="underline"
          className="o-job-hero__title a-animated-block a-bgslide-text a-delay-animated"
        >
          <span>{title}</span>
        </Title>
      </div>
    </div>
  );
};

export default JobHero;
