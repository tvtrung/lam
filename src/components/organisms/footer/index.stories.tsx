import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from './';

export default {
  title: 'Components/Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  address1: 'Lầu 12, An Phú Plaza 117-119 Lý Chí Thắng, Phường Võ Thị Sáu, Quận 3, TP. HCM',
  address2: 'Tầng 3, Toà nhà Thuỷ Lợi 4, số 286-288 Nguyễn Xí, Phường 13, Quận Bình Thạnh, TP. HCM',
  email: 'info@lampart-vn.com',
  fax: '(+84 0) 28-3620-1378',
  phone1: '(+84 0) 28-3990-3296',
  phone2: '(+84 0) 28-3990-3297',
};
