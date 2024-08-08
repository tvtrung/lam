import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogNavigator from './';

export default {
  title: 'Components/Molecules/BlogNavigator',
  component: BlogNavigator,
} as ComponentMeta<typeof BlogNavigator>;

const Template: ComponentStory<typeof BlogNavigator> = args => <BlogNavigator {...args} />;

export const Normal = Template.bind({});
Normal.args = { prevUrl: '#', nextUrl: '#' };
