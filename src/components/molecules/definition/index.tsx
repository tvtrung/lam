import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';

interface DefinitionProps {
  className?: string;
  modifiers?: ModifierProp<'row'>;
  title: string;
  content: React.ReactNode;
}

const Definition: React.FC<DefinitionProps> = ({ className: addClass, modifiers, title, content }) => {
  const className = mapModifiers('m-definition', modifiers);
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <dt className="m-definition__title">{title}</dt>
      <dd className="m-definition__content">{content}</dd>
    </div>
  );
};

export default Definition;
