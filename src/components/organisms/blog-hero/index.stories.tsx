import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogHero from './';

export default {
  title: 'Components/Organisms/BlogHero',
  component: BlogHero,
} as ComponentMeta<typeof BlogHero>;

const Template: ComponentStory<typeof BlogHero> = args => <BlogHero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'TIN TỨC',
  bgImage: '/images/blog-hero-bg.jpg',
  image: '/images/blog-hero-img.png',
};
