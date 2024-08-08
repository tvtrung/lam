import { ComponentMeta, ComponentStory } from '@storybook/react';
import Social from '.';

export default {
  title: 'Components/Organisms/Social',
  component: Social,
} as ComponentMeta<typeof Social>;

const Template: ComponentStory<typeof Social> = args => <Social {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'FOLLOW US',
};
