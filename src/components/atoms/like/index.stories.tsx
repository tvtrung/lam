import { ComponentMeta, ComponentStory } from '@storybook/react';
import Like from '.';

export default {
  title: 'Components/Atoms/Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = args => <Like {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dislike = Template.bind({});
Dislike.args = {
  isLiked: true,
};
