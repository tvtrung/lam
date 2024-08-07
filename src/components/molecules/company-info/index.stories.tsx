import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from 'components/atoms/text';
import CompanyInfo from './';

export default {
  title: 'Components/Molecules/CompanyInfo',
  component: CompanyInfo,
} as ComponentMeta<typeof CompanyInfo>;

const Template: ComponentStory<typeof CompanyInfo> = args => <CompanyInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  items: [
    {
      term: 'Tên công ty',
      value: 'Công ty TNHH LAMPART',
      icon: 'company',
    },
    {
      term: 'Ngày thành lập',
      value: '26 tháng 11 năm 2012',
      icon: 'calendar',
    },
    {
      term: 'trụ sở chính',
      value: 'Công ty Wakka Inc.',
      icon: 'headquarters',
    },
    {
      term: 'văn phòng',
      value: 'Lầu 12, An Phú Plaza 117-119 Lý Chính Thắng, Phường Võ Thị Sáu, Quận 3',
      icon: 'map-marker',
    },
    {
      term: 'số điện thoại',
      value: '(+84 0) 28-3990-3296<br />(+84 0) 28-3990-3297',
      icon: 'phone',
    },
    {
      term: 'FAX',
      value: '(+84 0) 28-3620-1378',
      icon: 'mail',
    },
  ],
};
