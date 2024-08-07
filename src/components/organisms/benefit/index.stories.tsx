import { ComponentMeta, ComponentStory } from '@storybook/react';
import Benefit from '.';

export default {
  title: 'Components/Organisms/Benefit',
  component: Benefit,
  parameters: {
    paddings: 0,
  },
} as ComponentMeta<typeof Benefit>;

const Template: ComponentStory<typeof Benefit> = args => <Benefit {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'LỢI ÍCH KHI LÀM VIỆC TẠI LAMPART',
  benefits: [
    {
      image: '/images/benefit-img-01.svg',
      title: 'Thưởng thành tích',
      hiddenContent: (
        <p>
          Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi
          khác, điển hình như các phúc lợi sau:
          <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
          <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
          <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
          <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
          <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
        </p>
      ),
    },
    {
      image: '/images/benefit-img-02.svg',
      title: 'Đánh giá lương',
      hiddenContent: (
        <p>
          Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi
          khác, điển hình như các phúc lợi sau:
          <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
          <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
          <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
          <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
          <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
        </p>
      ),
    },
    {
      image: '/images/benefit-img-03.svg',
      title: 'Bữa trưa Chào mừng nhân viên mới',
      hiddenContent: (
        <p>
          Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi
          khác, điển hình như các phúc lợi sau:
          <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
          <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
          <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
          <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
          <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
        </p>
      ),
    },
    {
      image: '/images/benefit-img-04.svg',
      title: 'Bảo hiểm tai nạn lao động',
      hiddenContent: (
        <p>
          Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi
          khác, điển hình như các phúc lợi sau:
          <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
          <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
          <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
          <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
          <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
        </p>
      ),
    },
    {
      image: '/images/benefit-img-05.svg',
      title: 'Event trong năm',
      hiddenContent: (
        <p>
          Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi
          khác, điển hình như các phúc lợi sau:
          <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
          <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
          <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
          <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
          <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
        </p>
      ),
    },
    {
      image: '/images/benefit-img-06.svg',
      title: 'Các phúc lợi khác',
      hiddenContent: (
        <p>
          Với mục đích chăm lo sức khỏe và đảm bảo môi trường cũng như tinh thần làm việc. Lampart còn nhiều phúc lợi
          khác, điển hình như các phúc lợi sau:
          <br />- Woman day: 0.5 ngày nghỉ trong tháng cho các bạn nữ
          <br />- Đám cưới nhân viên: 5,000,000VND/ nhân viên
          <br />- Nhân viên làm việc lâu năm: 10,000,000VND/nhân viên
          <br />- Nhân viên là F0: nhận 100% lương trong thời gian điều trị
          <br />- Hỗ trợ chi phí Internet, điện trong thời gian làm việc tại nhà
        </p>
      ),
    },
  ],
};
