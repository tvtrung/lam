import Icon, { ICON_SHAPES } from 'components/atoms/icon';
import Text from 'components/atoms/text';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';

interface IndicatorItemProps {
  icon: typeof ICON_SHAPES[number];
  text: string;
  isActive?: boolean;
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
}

export const IndicatorItem: React.FC<IndicatorItemProps> = ({ icon, text, isActive, onClick }) => {
  return (
    <li
      className={mapClassnames('m-indicators__nav-item', isActive && 'm-indicators__nav-item--active')}
      onClick={e => onClick && onClick(e)}
    >
      <Icon iconName={icon} />
      <Text className="m-indicators__nav-text">{text}</Text>
    </li>
  );
};

interface IndicatorsProps {
  className?: string;
  isOpen?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const Indicators: React.FC<IndicatorsProps> = ({ className: addClass, children, isOpen, onClick }) => {
  const className = mapModifiers('m-indicators');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();
  return (
    <div className={classNames}>
      <button className="m-indicators__button" onClick={e => onClick && onClick(e)}>
        {t('display-order')}
        <Icon iconName="filter" />
      </button>
      <ul className={`m-indicators__nav ${isOpen ? 'm-indicators__nav--open' : ''}`}>{children}</ul>
    </div>
  );
};

export default Indicators;
