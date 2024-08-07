import Title from 'components/atoms/title';
import CardInfo, { CardInfoProps } from 'components/molecules/card-info';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface AchievementProps {
  className?: string;
  title: string;
  listCard: CardInfoProps[];
}

const Achievement: React.FC<AchievementProps> = ({ className: addClass, title, listCard }) => {
  const className = mapModifiers('o-achievement');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <Container modifiers="medium">
        <Title tag="h2" className="o-achievement__title a-animated-block a-animated-fadeinup">
          <span>{title}</span>
        </Title>
        <ul className="o-achievement__list-card">
          {listCard.map((item, index) => (
            <li key={index} className="o-achievement__list-item a-animated-block a-animated-fadeinup">
              <CardInfo
                image={item.image}
                title={item.title}
                content={item.content}
                number={item.number}
                onClick={item.onClick}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Achievement;
