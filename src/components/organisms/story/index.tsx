import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface StoryProps {
  className?: string;
  intro: React.ReactNode;
  linkText?: string;
  linkUrl?: string;
  title: string;
  content: React.ReactNode;
}

const Story: React.FC<StoryProps> = ({ className: addClass, intro, linkText, linkUrl, title, content }) => {
  const className = mapModifiers('o-story');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <Container className="o-story__wrapper">
        <div className="o-story__content-wrapper">
          <Text className="o-story__intro">{intro}</Text>
          {linkText && <Button linkText={linkText} linkUrl={linkUrl} className="o-story__link" />}
          <article>
            <Title className="o-story__title" tag="h3">
              {title}
            </Title>
            <Text className="o-story__content">{content}</Text>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Story;
