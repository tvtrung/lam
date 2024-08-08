import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';

export interface Props {
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  modifiers?: ModifierProp<'inverse' | 'underline' | 'highlight' | 'green'>;
  align?: ModifierProp<'center'>;
}

const Title: React.FC<Props> = ({ className: addClass, children, tag: Tag = 'h2', modifiers, align }) => {
  const className = mapModifiers('a-title', modifiers, align);
  const classNames = mapClassnames(className, addClass);
  return <Tag className={classNames}>{children}</Tag>;
};

export default Title;
