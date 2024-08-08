import { ComponentMeta, ComponentStory } from '@storybook/react';
import TopBlog from './';

export default {
  title: 'Components/Organisms/TopBlog',
  component: TopBlog,
} as ComponentMeta<typeof TopBlog>;

const Template: ComponentStory<typeof TopBlog> = args => <TopBlog {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'BLOG',
  data: [
    {
      image: '/images/card-img-dummy-1.jpg',
      date: '20.10.2021',
      title: 'Kỷ niệm 9 năm thành lập Công ty (26/11/2012 - 26/11/2021)',
      category: 'CULTURE',
      linkUrl: '#',
    },
    {
      image: '/images/card-img-dummy-2.jpg',
      date: '20.10.2021',
      title: 'Thể thao cùng Lampart',
      category: 'SPORT',
      linkUrl: '#',
    },
    {
      image: '/images/card-img-dummy-3.jpg',
      date: '20.10.2021',
      title: 'Happy International Men’s day (19/11)',
      category: 'PARTY',
      linkUrl: '#',
    },
    {
      image: '/images/card-img-dummy-2.jpg',
      date: '20.10.2021',
      title: 'Lorem Ipsum Dolor Sit Amet',
      category: 'SPORT',
      linkUrl: '#',
    },
  ],
};
