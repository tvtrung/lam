import Icon, { ICON_SHAPES } from 'components/atoms/icon';
import Text from 'components/atoms/text';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import Image from 'components/atoms/image';
import parse from 'html-react-parser';
export interface CompanyInfoProps {
  className?: string;
  items: {
    term: string;
    value: string;
    icon: (typeof ICON_SHAPES)[number];
  }[];
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ className: addClass, items }) => {
  const className = mapModifiers('m-company-info');
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <Container modifiers="medium">
        <ul className="m-company-info__list a-animated-block a-animated-fadeinup">
          {items.map(({ term, value, icon }, idx) => (
            <li key={idx} className="m-company-info__item">
              {/* {icon && <Icon iconName={icon} className="m-company-info__icon" />} */}
              {icon && <Image width={32} height={32} src={icon} className="m-company-info__icon" alt={`icon ${idx}`}/>}
              <div className="m-company-info__content">
                <Text className="m-company-info__term">{term}</Text>
                {idx !== 2 && <div className="m-company-info__value">{parse(value)}</div>}
                {idx === 2 && (
                  <Text modifiers="green">
                    <a href="https://wakka-inc.com/" target="_blank">
                      {value}
                    </a>
                  </Text>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default CompanyInfo;
