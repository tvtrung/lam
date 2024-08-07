import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogRelated from './';

export default {
  title: 'Components/Organisms/BlogRelated',
  component: BlogRelated,
} as ComponentMeta<typeof BlogRelated>;

const Template: ComponentStory<typeof BlogRelated> = args => <BlogRelated {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  bgTitle: 'OTHERS',
  title: 'BLOG LIÊN QUAN KHÁC',
  blogList: [
    {
      linkUrl: '#',
      publishDate: '20.10.2021',
      topic: 'SEMINAR',
      blogTitle: 'Seminar Công nghệ và sự đổi mới trong năm 2022',
      blogImageSrc: '/images/blog-related-img-dummy-01.jpg',
    },
    {
      linkUrl: '#',
      publishDate: '20.10.2021',
      topic: 'PARTY',
      blogTitle: 'Happy International Men’s Day (19/11)',
      blogImageSrc: '/images/blog-related-img-dummy-02.jpg',
    },
  ],
};
