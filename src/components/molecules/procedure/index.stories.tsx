import { ComponentMeta, ComponentStory } from '@storybook/react';
import Procedure from './';

export default {
  title: 'Components/Molecules/Procedure',
  component: Procedure,
} as ComponentMeta<typeof Procedure>;

const Template: ComponentStory<typeof Procedure> = args => <Procedure {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  procedure: [
    { iconSrc: '/images/icon-requirement.svg', content: 'Lấy yêu cầu từ khách hàng' },
    { iconSrc: '/images/icon-design.svg', content: 'Thiết kế' },
    { iconSrc: '/images/icon-dev.svg', content: 'Lập trình' },
    { iconSrc: '/images/icon-test.svg', content: 'Kiểm tra' },
    { iconSrc: '/images/icon-maintenance.svg', content: 'Bảo trì' },
  ],
};
