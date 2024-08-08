import Image from 'components/atoms/image';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import React from 'react';

interface ProcessProps {
  className?: string;
  image: string;
  title: string;
  content: string;
}

const Process: React.FC<ProcessProps> = ({ className: addClass, title, content, image, children }) => {
  const className = mapModifiers('o-process');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <div className="o-process__kv">
        <Container className="o-process__kv-container">
          <div className="o-process__kv-content">
            <Title className="o-process__kv-title a-animated-block a-animated-fadeinup" modifiers="inverse">
              <span>{title}</span>
            </Title>
            <Text className="o-process__kv-text a-animated-block a-animated-fadeinup a-delay-animated">{content}</Text>
          </div>
          <div className="o-process__kv-image">
            <Image
              className="a-animated-block a-animated-fadeinup"
              src={image}
              modifiers="filled"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt={title}
            />
          </div>
          <span className="o-process__kv-label">
            WORK <br />
            PROCESS
          </span>
        </Container>
      </div>
      <div className="o-process__body">{children}</div>
    </section>
  );
};

export default Process;
