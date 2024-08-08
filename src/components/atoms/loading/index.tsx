import { mapModifiers, mapClassnames, ModifierProp } from 'helpers/components';

interface Props {
  className?: string;
  modifiers?: ModifierProp<'active'>;
}

const Loading: React.FC<Props> = ({ className: addClass, modifiers }) => {
  const className = mapModifiers('a-loading', modifiers);
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <div className="a-loading__inner">
        <div className="a-loading__item"></div>
        <div className="a-loading__item"></div>
      </div>
    </div>
  );
};

export default Loading;
