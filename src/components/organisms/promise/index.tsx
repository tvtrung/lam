import Title from 'components/atoms/title';
import BlockPromise, { BlockPromiseProps } from 'components/molecules/block-promise';
import Container from 'components/organisms/container';
import { mapClassnames } from 'helpers/components';

interface PromiseProps {
  className?: string;
  title?: string;
  data: BlockPromiseProps[];
}

const Promise: React.FC<PromiseProps> = ({ className: addClass, title, data }) => {
  const classNames = mapClassnames('o-promise', addClass);
  return (
    <section className={classNames}>
      <Container>
        {title && (
          <Title className="o-promise__title a-animated-fadeinup a-animated-block">
            <span>{title}</span>
          </Title>
        )}
        <ul className="o-promise__items a-animated-fadeinup a-animated-block">
          {data.map((v, i) => (
            <li key={i} className="o-promise__item">
              <BlockPromise icon={v.icon} title={v.title} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Promise;
