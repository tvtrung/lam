import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from '.';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
  decorators: [
    Story => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args}></Card>;

export const Normal = Template.bind({});
Normal.args = {
  image: '/images/card-img-dummy-1.jpg',
  date: '20.10.2021',
  title: 'Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)',
  category: 'CULTURE',
  linkUrl: '#',
};

export const CardBlog = Template.bind({});
CardBlog.args = {
  image: '/images/blog-thumb-01.jpg',
  date: '20.10.2021',
  title: 'Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)',
  category: 'CULTURE',
  linkUrl: '#',
  modifiers: 'blog',
  isNew: true,
  viewCount: 12,
};
