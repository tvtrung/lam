import { ComponentMeta, ComponentStory } from '@storybook/react';
import Company from './';

export default {
  title: 'Components/Organisms/Company',
  component: Company,
} as ComponentMeta<typeof Company>;

const Template: ComponentStory<typeof Company> = args => <Company {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Công ty mẹ',
  image: '/images/company.svg',
  innerTitle: 'Wakka Inc. ',
  link: 'https://wakka-inc.com/',
  location: 'Shinjuku-ku, Tokyo, Japan',
  content:
    'Văn phòng Wakka Inc tại Nhật Bản thực hiện các hoạt động kinh doanh tư vấn về Phát triển Website nhằm phục vụ nhu cầu kinh doanh của khách hàng tại Nhật Bản. Tại văn phòng Wakka, với các chuyên gia Kỹ sư hệ thống, Web Director, và nhân sự tư vấn thành lập doanh nghiệp và các nghiệp vụ tổng vụ nhân sự. Chúng tôi luôn nỗ lực để mang lại chất lượng tốt nhất tới khách hàng. Đồng thời cùng chia sẻ các kiến thức và kỹ năng trong nghề tới các nhân viên Lampart với mong muốn kỹ sư tại Việt Nam sẽ mang chất lượng của Nhật Bản tới toàn Châu Á',
};
