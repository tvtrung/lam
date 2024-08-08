import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import React from 'react';
import Lottie from 'lottie-react';

interface DiagramItemProps {
  title: React.ReactNode;
  img: string;
  scope: string;
  content: React.ReactNode;
  highlight?: boolean;
}
interface DiagramProps {
  className?: string;
  timeline: DiagramItemProps[];
  label: { color: string; text: string }[];
  releaseTitle: string;
  //MEMO: cannot type json files as string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  releaseImg: any;
}

const Diagram: React.FC<DiagramProps> = ({ className: addClass, timeline, label, releaseTitle, releaseImg }) => {
  const classNames = mapClassnames('o-diagram', addClass);
  return (
    <section className={classNames}>
      <Container modifiers="medium" className="o-diagram__inner">
        <ul className="o-diagram__anotation">
          {label.map((item, key) => (
            <li
              key={key}
              className={mapClassnames(
                'a-animated-block a-animated-fadeinup',
                mapModifiers('o-diagram__anotation-item', item.color)
              )}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <ul className="o-diagram__list">
          {timeline.map((item, key) => (
            <li
              key={key}
              className={mapClassnames(
                'a-animated-block a-animated-fadeinup',
                mapModifiers('o-diagram__item', item.highlight && 'highlight')
              )}
            >
              <Title className="o-diagram__title" tag="h3">
                {item.title}
              </Title>
              <div className="o-diagram__image">
                <Image
                  src={item.img}
                  modifiers="filled"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                  alt={
                    typeof item.title === 'string'
                      ? item.title
                      : (item.title as React.ReactElement)?.props.children.join('').replace('[object Object]', '')
                  }
                />
              </div>
              <Text className="o-diagram__scope">{item.scope}</Text>
              <Text className="o-diagram__content">{item.content}</Text>
            </li>
          ))}
          <li className="o-diagram__release a-animated-block a-animated-fadeinup">
            <Title className="o-diagram__release-title">{releaseTitle}</Title>
            <div className="o-diagram__release-image">
              <Lottie animationData={releaseImg} loop />
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Diagram;
