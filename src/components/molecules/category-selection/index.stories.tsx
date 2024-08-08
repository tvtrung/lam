import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategorySelection from './';

export default {
  title: 'Components/Molecules/CategorySelection',
  component: CategorySelection,
} as ComponentMeta<typeof CategorySelection>;

const Template: ComponentStory<typeof CategorySelection> = args => <CategorySelection {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'Công nghệ', icon: 'technology', number: 20 };
