import { ComponentMeta, ComponentStory } from '@storybook/react';
import ScrollTop from './';

export default {
  title: 'Components/Atoms/ScrollTop',
  component: ScrollTop,
} as ComponentMeta<typeof ScrollTop>;

const Template: ComponentStory<typeof ScrollTop> = args => <ScrollTop {...args} />;

export const Normal = Template.bind({});
