import { ComponentMeta, ComponentStory } from '@storybook/react';
import Develop from '.';

export default {
  title: 'Components/Organisms/Develop',
  component: Develop,
} as ComponentMeta<typeof Develop>;

const Template: ComponentStory<typeof Develop> = args => <Develop {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'PHÁT TRIỂN BẢN THÂN TẠI LAMPART',
  data: [
    {
      image: '/images/grid-info-dummy.jpg',
      title: 'KỸ NĂNG MỀM',
      children: (
        <>
          Tại Lampart, nhân viên không chỉ có môi trường thực tế để ứng dụng kỹ thuật tiên tiến nhất, mà còn được chú
          trọng nâng cao tầm nhận thức, phát triển kỹ năng mềm và tích lũy kinh nghiệm làm việc.
        </>
      ),
    },
    {
      modifiers: 'reverse',
      image: '/images/grid-info-dummy2.jpg',
      title: 'ĐÀO TẠO CHUYÊN SÂU DÀNH CHO THỰC TẬP SINH',
      children: (
        <>
          Giáo án đào tạo chuyên sâu với trọng tâm là kỹ thuật sử dụng trong dự án thực tế tại Lampart được soạn thảo từ
          các Giảng viên đang trực tiếp giảng dạy tại các trường Đại học tại TP. HCM
          <br />
          Giáo án được áp dụng riêng cho từng nhân viên giúp cho các bạn Thực Tập Sinh có cơ hội học tập song song với
          thực hành, tạo môi trường thuận lợi cho kiến thức được áp dụng thăng hoa vào thực tiễn một cách hoàn hảo.
        </>
      ),
    },
    {
      image: '/images/grid-info-dummy3.jpg',
      title: 'PHÁT TRIỂN KỸ NĂNG CỦA BẢN THÂN THÔNG QUA DỰ ÁN THỰC TẾ',
      children: (
        <>
          Bạn sẽ càng ngày trở nên hoàn thiện bản thân hơn khi thông qua các Dự án thực tế tại Lampart. Ngoài kỹ thuật
          được học hỏi thông qua các Dự án khi làm việc trực tiếp với các kỹ sư (System Engineer) của công ty mẹ, bạn
          còn được tích lũy thêm kinh nghiệm đối ứng và xử lý vấn đề thông qua công việc khi làm việc với khách hàng tại
          Nhật.
        </>
      ),
    },
  ],
};
