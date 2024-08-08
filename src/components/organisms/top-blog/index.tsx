import Button from 'components/atoms/button';
import Title from 'components/atoms/title';
import Card, { CardProps } from 'components/molecules/card';
import CardSlide from 'components/organisms/card-slide';
import Container from 'components/organisms/container';
import { mapClassnames } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import React from 'react';

interface TopBlogProps {
  className?: string;
  linkUrl?: string;
  title?: string;
  data: CardProps[];
}

const TopBlog: React.FC<TopBlogProps> = ({ className: addClass, title, data, linkUrl }) => {
  const classNames = mapClassnames('o-top-blog', addClass);
  const { t } = useTranslation();
  return (
    <section className={classNames}>
      <Container>
        {title && (
          <Title className="a-animated-block a-animated-fadeinup o-top-blog__title">
            <span>{title}</span>
          </Title>
        )}
        <CardSlide className="o-top-blog__card-slide a-animated-block a-animated-fadeinup">
          {data.map((v, i) => (
            <Card key={i}
              image={v.image}
              date={v.date}
              title={v.title}
              category={v.category}
              linkUrl={`/blog/${v.id}`}
              modifiers="blog"
            />
          ))}
        </CardSlide>
        <Button className="o-top-blog__button" linkText={t('see-more')} linkUrl={linkUrl} />
      </Container>
    </section>
  );
};

export default TopBlog;
