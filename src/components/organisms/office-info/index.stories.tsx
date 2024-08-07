import { ComponentMeta, ComponentStory } from '@storybook/react';
import OfficeInfo from './';

export default {
  title: 'Components/Organisms/OfficeInfo',
  component: OfficeInfo,
} as ComponentMeta<typeof OfficeInfo>;

const Template: ComponentStory<typeof OfficeInfo> = args => <OfficeInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'VĂN PHÒNG' };
