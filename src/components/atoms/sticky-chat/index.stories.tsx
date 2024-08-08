import { ComponentMeta, ComponentStory } from '@storybook/react';
import StickyChat from './';

export default {
  title: 'Components/Atoms/StickyChat',
  component: StickyChat,
} as ComponentMeta<typeof StickyChat>;

const Template: ComponentStory<typeof StickyChat> = args => <StickyChat {...args} />;

export const Normal = Template.bind({});
