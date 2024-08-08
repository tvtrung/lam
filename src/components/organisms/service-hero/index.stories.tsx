import { ComponentMeta, ComponentStory } from '@storybook/react';
import ServiceHero from '.';

export default {
  title: 'Components/Organisms/ServiceHero',
  component: ServiceHero,
} as ComponentMeta<typeof ServiceHero>;

const Template: ComponentStory<typeof ServiceHero> = args => <ServiceHero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'DỊCH VỤ',
  leftBg: '/images/jobs-bg.jpg',
  image: '/images/service-img.jpg',
  children: (
    <>
      Lampart đang cung cấp các dịch vụ Tư vấn và lập kế hoạch xây dựng nội dung phát triển phần mềm hệ thống; phát
      triển và bảo trì phần mềm; Thiết kế và xây dựng Website cho các quý khách hàng Doanh nghiệp tại Nhật Bản.
      <br />
      <br />
      Đồng thời chúng tôi cung cấp dịch vụ thành lập công ty và tuyển dụng nguồn Nhân lực cho các đối tác Nhật Bản có
      nhu cầu thành lập Công ty tại Việt Nam.
    </>
  ),
  data: ['Phát triển gia công phần mềm', 'Thiết kế linh hoạt theo yêu cầu', 'Dịch vụ Labo'],
};
