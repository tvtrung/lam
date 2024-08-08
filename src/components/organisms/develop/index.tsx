import Title from 'components/atoms/title';
import GridInfo, { GridInfoProps } from 'components/organisms/grid-info';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface DevelopProps {
  className?: string;
  title?: string;
  data: GridInfoProps[];
}

const Develop: React.FC<DevelopProps> = ({ className: addClass, title, data }) => {
  const className = mapModifiers('o-develop');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      {title && (
        <Title className="o-develop__title a-animated-block a-animated-fadeinup">
          <span>{title}</span>
        </Title>
      )}
      <div className="o-develop__list">
        {data.map((item, index) => (
          <GridInfo
            key={index}
            modifiers={item.modifiers}
            image={item.image}
            imageSP={item.imageSP}
            title={item.title}
            children={item.children}
          />
        ))}
      </div>
    </section>
  );
};

export default Develop;
