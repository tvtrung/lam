import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlockBenefit from '.';

export default {
  title: 'Components/Molecules/BlockBenefit',
  component: BlockBenefit,
} as ComponentMeta<typeof BlockBenefit>;

const Template: ComponentStory<typeof BlockBenefit> = args => <BlockBenefit {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: '../images/benefit-img-01.svg',
  title: 'Thưởng thành tích',
};

export const Open = Template.bind({});
Open.args = {
  image: '../images/benefit-img-06.svg',
  title: 'Các phúc lợi khác',
  modifiers: 'opened',
  hiddenContent: (
    <p>
      Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi khác,
      điển hình như các phúc lợi sau:
      <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
      <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
      <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
      <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
      <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
    </p>
  ),
};
