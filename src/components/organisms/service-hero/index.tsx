import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import { mapClassnames } from 'helpers/components';
import { useRouter } from 'next/router';

interface ServiceHeroProps {
  className?: string;
  title?: string;
  leftBg: string;
  image: string;
  data: string[];
}

const ServiceHero: React.FC<ServiceHeroProps> = ({ className: addClass, title, data, children, leftBg, image }) => {
  const classNames = mapClassnames('o-service-hero', addClass);
  const router = useRouter();
  return (
    <>
      <section className={classNames}>
        <div className="o-service-hero__bg a-animated-block a-animated-fadein">
          <Image src={leftBg} modifiers="filled" layout="fill" objectFit="cover" alt={title} />
        </div>
        <div className="o-service-hero__content">
          <h1 className="o-service-hero__big-title">
            <svg
              id="eWfVU0qcwio1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 534 150"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
            >
              <g mask="url(#service-title)">
                <image
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="534"
                  height="150"
                  xlinkHref="/images/service-heading.png"
                ></image>
                <mask id="service-title">
                  <path
                    d="M59.027266,43.066249Q13.773029,31.260796,10.624908,56.839278C4.155116,84.283133,54.69612,74.999998,54.69612,98.816404c4.331146,12.457983-14.281692,30.231312-50.541004,17.473406"
                    transform="translate(0 0.000002)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="189.448948"
                    strokeDasharray="189.448948"
                  />
                  <path
                    d="M132.181822,39.674753h-51.807801l.32853,79.425263l51.926915-.000001"
                    transform="translate(.000003 0.000001)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="183.160658"
                    strokeDasharray="183.160658"
                  />
                  <path
                    d="M80.374024,78.387386h47.418399"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="47.418399"
                    strokeDasharray="47.418399"
                  />
                  <path
                    d="M152.549707,125.466551v-85.791797q49.241039-5.751774,48.793394,21.330798t-47.226634,21.881831l23.515812,1.39575l33.847338,45.883697"
                    transform="translate(.000001 0.000002)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="287.170796"
                    strokeDasharray="287.170796"
                  />
                  <path
                    d="M218.086501,30.110382l35.236713,100.05645l35.236714-100.05645"
                    transform="translate(.000001 0)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeLinejoin="bevel"
                    strokeDashoffset="212.159555"
                    strokeDasharray="212.159555"
                  />
                  <path
                    d="M309.715755,34.464298v91.002255"
                    transform="translate(0 0.000001)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="91.002255"
                    strokeDasharray="91.002255"
                  />
                  <path
                    d="M398.674658,40.674756q-43.474367-7.362433-57.611452,16.164524c-5.531903,22.548106-3.098484,35.479369,2,49.682461q17.868674,19.596672,55.611452,9.76807"
                    transform="translate(.000001 0.000001)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="173.887276"
                    strokeDasharray="173.887276"
                  />
                  <path
                    d="M463.432651,39.674756h-50.913571l-.000001,79.42526h51.675772"
                    transform="translate(.000001 0)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="182.014603"
                    strokeDasharray="182.014603"
                  />
                  <path
                    d="M412.519081,78.387386h44.9556"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="44.9556"
                    strokeDasharray="44.9556"
                  />
                  <path
                    d="M527.729122,40.674756q-46.693374-7.36243-48.589092,16.164525c-5.957971,27.443853,45.768051,18.160718,43.872333,41.977125.270817,18.28361-20.146051,25.839941-52.102442,17.473405"
                    transform="translate(0 0.000001)"
                    fill="none"
                    stroke="#3f5787"
                    strokeWidth="15"
                    strokeDashoffset="188.913204"
                    strokeDasharray="188.913204"
                  />
                </mask>
              </g>
            </svg>
          </h1>

          <div className="o-service-hero__image a-animated-block a-animated-fadein a-delay-animated">
            <Image
              src={image}
              modifiers="filled"
              layout="fill"
              objectFit="cover"
              alt={title}
              className="a-animated-block a-animated-fadein"
            />
          </div>
          <Title
            tag="h2"
            modifiers="underline"
            className="o-service-hero__title a-animated-block a-bgslide-text a-delay-animated"
          >
            <span>{title}</span>
          </Title>
          <Text className="o-service-hero__text a-animated-fadeinup a-animated-block a-delay-animated-2">
            {children}
          </Text>
        </div>
        <ul className="o-service-hero__items a-animated-block a-animated-fadein">
          {data.map((v, i) => (
            <li
              key={i}
              className={router.locale === 'vi' ? 'o-service-hero__item__vi' : 'o-service-hero__item'}
              dangerouslySetInnerHTML={{ __html: v }}
            ></li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ServiceHero;
