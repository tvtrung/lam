import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/molecules/card';
import CardSlide from './';

export default {
  title: 'Components/Organisms/CardSlide',
  component: CardSlide,
} as ComponentMeta<typeof CardSlide>;

const Template: ComponentStory<typeof CardSlide> = args => <CardSlide {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <Card
      image="/images/card-img-dummy-1.jpg"
      date="20.10.2021"
      title="Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)"
      category="CULTURE"
      linkUrl="#"
      key={1}
    />,
    <Card
      image="/images/card-img-dummy-2.jpg"
      date="20.10.2021"
      title="Thể thao cùng Lampart"
      category="SPORT"
      linkUrl="#"
      key={2}
    />,
    <Card
      image="/images/card-img-dummy-3.jpg"
      date="20.10.2021"
      title="Happy International Men’s day (19/11)"
      category="PARTY"
      linkUrl="#"
      key={3}
    />,
    <Card
      image="/images/card-img-dummy-2.jpg"
      date="20.10.2021"
      title="Lorem Ipsum Dolor Sit Amet"
      category="SPORT"
      linkUrl="#"
      key={4}
    />,
  ],
};
