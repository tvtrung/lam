import { mapModifiers, mapClassnames, ModifierProp } from 'helpers/components';

interface Props {
  className?: string;
  modifiers?: ModifierProp<'medium' | 'semi-bold' | 'bold' | 'highlight' | 'green' | 'fz-medium' | 'border-highlight'>;
  asSpan?: boolean;
}

const Text: React.FC<Props> = ({ className: addClass, modifiers, children, asSpan }) => {
  const className = mapModifiers('a-text', modifiers);
  const classNames = mapClassnames(className, addClass);
  const Text = asSpan ? 'span' : 'p';
  return <Text className={classNames}>{children}</Text>;
};

export default Text;
