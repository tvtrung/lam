import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';

interface ContainerProps {
  className?: string;
  modifiers?: ModifierProp<'small' | 'medium'>;
}

const Container: React.FC<ContainerProps> = ({ className: addClass, modifiers, children }) => {
  const className = mapModifiers('o-container', modifiers);
  const classNames = mapClassnames(className, addClass);
  return <div className={classNames}>{children}</div>;
};

export default Container;
