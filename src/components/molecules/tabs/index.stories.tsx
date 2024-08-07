import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from './';

export default {
  title: 'Components/Molecules/Tabs',
  component: Tabs,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#ccc' }],
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    { title: 'Job đang tuyển', content: 'Content 1' },
    { title: 'Job đã đóng', content: 'Content 2' },
  ],
};
