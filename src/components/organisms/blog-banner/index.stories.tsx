import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogBanner from './';

export default {
  title: 'Components/Organisms/BlogBanner',
  component: BlogBanner,
} as ComponentMeta<typeof BlogBanner>;

const Template: ComponentStory<typeof BlogBanner> = args => <BlogBanner {...args} />;

export const Normal = Template.bind({});
Normal.args = { leftBgSrc: '/images/bg-left-blog-banner.jpg', imageSrc: '/images/blog-banner-img-dummy.jpg' };
