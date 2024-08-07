import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface AboutHeroProps {
  className?: string;
  innerTitle: string;
  bgTitle: string;
  intro: React.ReactNode;
  content: React.ReactNode;
}

const AboutHero: React.FC<AboutHeroProps> = ({ className: addClass, innerTitle, bgTitle, intro, content }) => {
  const className = mapModifiers('o-about-hero');
  const classNames = mapClassnames(className, addClass);

  return (
    <>
      <section className={classNames + ' u-dn-sp a-animated-block a-animated-fadein'}>
        <div className="o-about-hero__wrapper">
          <div className="o-about-hero__content-wrapper a-animated-block a-animated-fadein a-delay-animated">
            <h1 className="o-about-hero__title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 408 150"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
              >
                <g mask="url(#about-title-pc)">
                  <image
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="408"
                    height="150"
                    xlinkHref="/images/about-heading.png"
                  ></image>
                  <mask id="about-title-pc">
                    <path
                      d="M6.047891,127.500342l35.356898-97.97671l35.356898,99.372376"
                      transform="translate(.000001 0.000001)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeDashoffset="209.636171"
                      strokeDasharray="209.636171"
                    />
                    <path
                      d="M6.047892,90.747776l70.713796.930445"
                      transform="translate(0 0.000001)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeDashoffset="70.719917"
                      strokeDasharray="70.719917"
                    />
                    <path
                      d="M98.515347,130.433153v-90.267944q50.730814-6.346531,49.253048,17.140667c1.477765,23.487199-26.495458,19.272376-43.637539,20.588161c7.093275,1.315784,49.357372-2.894035,46.106287,23.701758-4.137743,19.855162-22.834925,21.627578-48.419567,16.97784"
                      transform="translate(-1 0)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeDashoffset="322.20593"
                      strokeDasharray="322.20593"
                    />
                    <path
                      d="M204,38.521623q-32.492827,2.399949-31.732007,41.269723c.76082,38.869773,23.520986,40.898792,31.732007,40.898792c6.689382.760819,32.600021-2.029021,32.557248-40.898793.380409-15.401857-.825241-41.269721-32.557248-41.269722Z"
                      transform="translate(.000001 0.000002)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeLinecap="square"
                      strokeDashoffset="237.708509"
                      strokeDasharray="237.708509"
                    />
                    <path
                      d="M264.327162,34.337116v63.258679q4.564919,23.474752,28.150325,23.855162q21.302948,0,28.150324-23.855162v-63.258679"
                      transform="translate(.000002 0)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeDashoffset="207.2341"
                      strokeDasharray="207.2341"
                    />
                    <path
                      d="M337.348766,40.165209h70.651234"
                      transform="translate(-1 0)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeDashoffset="70.651234"
                      strokeDasharray="70.651234"
                    />
                    <path
                      d="M372.674383,34.337116v93.163227"
                      transform="translate(-1 0)"
                      fill="none"
                      stroke="#3f5787"
                      strokeWidth="15"
                      strokeDashoffset="93.163227"
                      strokeDasharray="93.163227"
                    />
                  </mask>
                </g>
              </svg>
            </h1>

            <article className="o-about-hero__article">
              <Title
                className="o-about-hero__inner-title a-animated-block a-bgslide-text a-delay-animated"
                tag="h3"
                modifiers="underline"
              >
                <span>{innerTitle}</span>
              </Title>
              <Text className="o-about-hero__intro" modifiers="medium">
                {intro}
              </Text>
            </article>
          </div>
          <Text className="o-about-hero__content a-animated-block a-animated-fadeinup">{content}</Text>
        </div>
        <Title className="o-about-hero__bg-title">{bgTitle}</Title>
      </section>

      <section className={classNames + ' u-dn-pc a-animated-block a-animated-fadeinup'}>
        <div className="o-about-hero__container">
          <div className="o-about-hero__wrapper a-animated-block a-animated-fadeinup a-delay-animated">
            <div className="o-about-hero__content-wrapper">
              <h1 className="o-about-hero__title">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 408 150"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                >
                  <g mask="url(#about-title-sp)">
                    <image
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="408"
                      height="150"
                      xlinkHref="/images/about-heading.png"
                    ></image>
                    <mask id="about-title-sp">
                      <path
                        d="M6.047891,127.500342l35.356898-97.97671l35.356898,99.372376"
                        transform="translate(.000001 0.000001)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeDashoffset="209.636171"
                        strokeDasharray="209.636171"
                      />
                      <path
                        d="M6.047892,90.747776l70.713796.930445"
                        transform="translate(0 0.000001)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeDashoffset="70.719917"
                        strokeDasharray="70.719917"
                      />
                      <path
                        d="M98.515347,130.433153v-90.267944q50.730814-6.346531,49.253048,17.140667c1.477765,23.487199-26.495458,19.272376-43.637539,20.588161c7.093275,1.315784,49.357372-2.894035,46.106287,23.701758-4.137743,19.855162-22.834925,21.627578-48.419567,16.97784"
                        transform="translate(-1 0)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeDashoffset="322.20593"
                        strokeDasharray="322.20593"
                      />
                      <path
                        d="M204,38.521623q-32.492827,2.399949-31.732007,41.269723c.76082,38.869773,23.520986,40.898792,31.732007,40.898792c6.689382.760819,32.600021-2.029021,32.557248-40.898793.380409-15.401857-.825241-41.269721-32.557248-41.269722Z"
                        transform="translate(.000001 0.000002)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeLinecap="square"
                        strokeDashoffset="237.708509"
                        strokeDasharray="237.708509"
                      />
                      <path
                        d="M264.327162,34.337116v63.258679q4.564919,23.474752,28.150325,23.855162q21.302948,0,28.150324-23.855162v-63.258679"
                        transform="translate(.000002 0)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeDashoffset="207.2341"
                        strokeDasharray="207.2341"
                      />
                      <path
                        d="M337.348766,40.165209h70.651234"
                        transform="translate(-1 0)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeDashoffset="70.651234"
                        strokeDasharray="70.651234"
                      />
                      <path
                        d="M372.674383,34.337116v93.163227"
                        transform="translate(-1 0)"
                        fill="none"
                        stroke="#3f5787"
                        strokeWidth="15"
                        strokeDashoffset="93.163227"
                        strokeDasharray="93.163227"
                      />
                    </mask>
                  </g>
                </svg>
              </h1>
            </div>
            <Title className="o-about-hero__bg-title">{bgTitle}</Title>
          </div>
          <article className="o-about-hero__article">
            <Title
              className="o-about-hero__inner-title a-animated-block a-bgslide-text a-delay-animated"
              tag="h3"
              modifiers="underline"
            >
              <span>{innerTitle}</span>
            </Title>
            <Text className="o-about-hero__intro" modifiers="medium">
              {intro}
            </Text>
          </article>
        </div>
        <Text className="o-about-hero__content">{content}</Text>
      </section>
    </>
  );
};

export default AboutHero;
