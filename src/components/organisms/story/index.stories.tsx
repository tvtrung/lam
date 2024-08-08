import { ComponentMeta, ComponentStory } from '@storybook/react';
import Story from './';

export default {
  title: 'Components/Organisms/Story',
  component: Story,
} as ComponentMeta<typeof Story>;

const Template: ComponentStory<typeof Story> = args => <Story {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  intro: (
    <>
      QC là người chịu trách nhiệm thực hiện công việc kiểm tra chất lượng phần mềm. Có 2 vị trí QC thông thường là
      Manual QC (không đòi hỏi kỹ năng lập trình) và Automation QC (đòi hỏi kỹ năng lập trình).
      <br />
      Tại Lampart, nếu bạn có cả hai kỹ năng này sẽ là một lợi thế của bạn trong công ty
    </>
  ),
  linkText: 'Dự án phụ trách',
  linkUrl: '#',
  title: 'QC là làm gì?',
  content: (
    <>
      Tìm hiểu hệ thống, phân tích tài liệu mô tả về hệ thống và thiết kế test case. Ngoài ra, QC còn thực hiện việc
      test phần mềm trước khi giao cho khách hàng.
      <br />
      Lên kế hoạch kiểm thử (thường do QC Leader thực hiện) Viết script cho Automation Test (nếu áp dụng kiểm thử tự
      động).
      <br />
      Sử dụng các test tool để tạo và thực hiện các test case/script chi tiết.
      <br />
      Phối hợp với nhóm lập trình trong việc fix bug và báo cáo chi tiết cho Project Manager hoặc các bên liên quan khác
      tuỳ dự án.
    </>
  ),
};
