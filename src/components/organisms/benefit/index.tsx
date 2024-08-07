import Title from 'components/atoms/title';
import BlockBenefit, { BlockBenefitProps } from 'components/molecules/block-benefit';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useIsSp } from 'utils/hooks';

interface BenefitProps {
  className?: string;
  title?: string;
  benefits: BlockBenefitProps[];
}

const Benefit: React.FC<BenefitProps> = ({ className: addClass, title, benefits }) => {
  const className = mapModifiers('o-benefit');
  const classNames = mapClassnames(className, addClass);
  const item_even = benefits.filter((_, idx) => idx % 2 === 0);
  const item_odd = benefits.filter((_, idx) => idx % 2 !== 0);
  const isSp = useIsSp();

  return (
    <section className={classNames}>
      <Container>
        {title && (
          <Title className="o-benefit__title a-animated-block a-animated-fadeinup">
            <span>{title}</span>
          </Title>
        )}
        <ul className="o-benefit__list">
          {/* Sp layout */}
          {isSp &&
            benefits.map((item, index) => (
              <li key={index} className="o-benefit__item a-animated-block a-animated-fadeinup">
                <BlockBenefit image={item.image} title={item.title} hiddenContent={item.hiddenContent} />
              </li>
            ))}

          {/* Pc layout */}
          {!isSp && (
            <>
              <li className="o-benefit__items-left a-animated-block a-animated-fadeinup">
                <ul>
                  {item_even.map((item, index) => (
                    <li key={index} className="o-benefit__item">
                      <BlockBenefit image={item.image} title={item.title} hiddenContent={item.hiddenContent} />
                    </li>
                  ))}
                </ul>
              </li>
              <li className="o-benefit__items-right a-animated-block a-animated-fadeinup">
                <ul>
                  {item_odd.map((item, index) => (
                    <li key={index} className="o-benefit__item">
                      <BlockBenefit image={item.image} title={item.title} hiddenContent={item.hiddenContent} />
                    </li>
                  ))}
                </ul>
              </li>
            </>
          )}
        </ul>
      </Container>
    </section>
  );
};

export default Benefit;
