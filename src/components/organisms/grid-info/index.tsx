import Image from 'components/atoms/image';
import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';

export interface GridInfoProps {
  children: React.ReactNode;
  className?: string;
  image: string;
  imageSP?: string;
  title?: React.ReactNode;
  modifiers?: ModifierProp<'reverse'>;
}

const GridInfo: React.FC<GridInfoProps> = ({ className: addClass, modifiers, image, imageSP, title, children }) => {
  const className = mapModifiers('o-grid-info', modifiers);
  const classNames = mapClassnames(className, addClass, 'o-animated-section a-animated-block');
  return (
    <div className={classNames}>
      <div className="o-grid-info__image">
        <Image
          src={image}
          // alt={
          //   typeof title === 'string'
          //     ? title
          //     : (title as React.ReactElement)?.props.children.join('').replace('[object Object]', '')
          // }
          spsrc={imageSP}
          modifiers="filled"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="a-bgslide-img"
          alt="grid info"
        />
      </div>
      <div className="o-grid-info__body">
        {title && (
          <h3 className="o-grid-info__title a-bgslide-text a-title--green">
            <span>{title}</span>
          </h3>
        )}
        <p className="o-grid-info__content a-animated-fadeinup a-animated-block a-delay-animated">{children}</p>
      </div>
    </div>
  );
};

export default GridInfo;
