import { mapClassnames, mapModifiers } from 'helpers/components';

export const ICON_SHAPES = [
  'arrow-right',
  'attach-file',
  'base-skill',
  'calendar',
  'company',
  'fax',
  'facebook',
  'instagram',
  'linkedin',
  'headquarters',
  'heart',
  'horenso',
  'mail',
  'map-marker',
  'phone',
  'predict-ability',
  'warning',
  'close',
  'target',
  'work-hard',
  'understand',
  'joy',
  'pressure',
  'idea',
  'time',
  'add',
  'eye',
  'search',
  'loudspeaker',
  'technology',
  'event',
  'culture',
  'teamwork',
  'chat',
  'youtube',
  'story',
  'document',
  'share',
  'filter',
  'triangle',
] as const;

interface Props {
  iconName: (typeof ICON_SHAPES)[number];
  className?: string;
}

const Icon: React.FC<Props> = ({ className: addClass, iconName }) => {
  const className = mapModifiers('a-icon', iconName);
  const classNames = mapClassnames(className, addClass);
  return <i className={classNames} />;
};

export default Icon;
