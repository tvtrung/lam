import { ComponentMeta, ComponentStory } from '@storybook/react';
import Diagram from 'components/organisms/diagram';
import Process from '.';

export default {
  title: 'Components/Organisms/Process',
  component: Process,
  parameters: { paddings: { default: 'none' } },
} as ComponentMeta<typeof Process>;

const argsDiagram = {
  label: [
    { color: 'gray', text: 'LAMPART / Việt Nam' },
    { color: 'green', text: 'WAKKA / Nhật Bản' },
  ],
  releaseImg: '/images/diagram-img06.svg',
  releaseTitle: 'RELEASE',
  timeline: [
    {
      title: 'HỢP ĐỒNG',
      scope: 'Giai đoạn 1',
      img: '/images/diagram-img01.svg',
      content: 'Nhân viên người Nhật phụ trách liên hệ thương lượng hợp đồng với khách hàng',
    },
    {
      title: (
        <>
          LẤY YÊU CẦU
          <br />
          PHÂN TÍCH YÊU CẦU
          <br />
          THIẾT KẾ TÀI LIỆU
        </>
      ),
      scope: 'Giai đoạn 2',
      img: '/images/diagram-img02.svg',
      content:
        'Dựa trên yêu cầu từ quý khách hàng, chúng tôi sẽ tiến hành phân tích và thiết kế tài liệu. Việc này do nhân viên người Nhật ở công ty chúng tôi đảm nhận.',
    },
    {
      highlight: true,
      title: (
        <>
          THIẾT KẾ
          <br />
          TẠO BẢNG THÔNG SỐ KỸ THUẬT
          <br />
          CHỈ THỊ TẠI VIỆT NAM
        </>
      ),
      scope: 'Giai đoạn 3',
      img: '/images/diagram-img03.svg',
      content: (
        <>
          Nhân viên người Nhật thường trú tại Việt Nam cũng có thể thực hiện công việc thiết kế ngay cả ở Việt nam tùy
          vào cơ cấu, hệ thống phát triển.
          <br /> Hơn nữa, các nhân viên BA và BrSE giàu kinh nghiệm về phát triển sẽ ra những chỉ thị chi tiết.
        </>
      ),
    },
    {
      highlight: true,
      title: (
        <>
          PHÁT TRIỂN・KIỂM TRA
          <br />
          TẠI VIỆT NAM
        </>
      ),
      scope: 'Giai đoạn 4',
      img: '/images/diagram-img04.svg',
      content: (
        <>
          Tiến hành lập trình và test tại Việt Nam.
          <br />
          Mỗi team đều có team leader phụ trách việc kiểm tra, review source code một cách chi tiết.
        </>
      ),
    },
    {
      title: (
        <>
          PHÍA WAKA NHẬT BẢN <br />
          KIỂM TRA SAU CÙNG
        </>
      ),
      scope: 'Giai đoạn 5',
      img: '/images/diagram-img05.svg',
      content:
        'SE của công ty chúng tôi thực hiện công việc kiểm tra chất lượng sản phẩm lần cuối cùng và tiến hành Release.',
    },
  ],
};

const TemplateDiagram: ComponentStory<typeof Process> = args => (
  <Process {...args}>
    <Diagram {...argsDiagram} />
  </Process>
);

export const ProcessDiagram = TemplateDiagram.bind({});
ProcessDiagram.args = {
  title: 'QUY TRÌNH LÀM VIỆC',
  image: '/images/process-img.jpg',
  content:
    'Với sự hiện diện thường trực của người Nhật là vai trò kết nối, chúng tôi đảm bảo các yêu cầu quý khách đặt ra cho công ty mẹ sẽ được thực hiện chính xác tại chi nhánh Việt Nam.',
};
