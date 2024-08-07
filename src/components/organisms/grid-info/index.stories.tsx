import { ComponentMeta, ComponentStory } from '@storybook/react';
import GridInfo from './';

export default {
  title: 'Components/Organisms/GridInfo',
  component: GridInfo,
} as ComponentMeta<typeof GridInfo>;

const Template: ComponentStory<typeof GridInfo> = args => <GridInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: '/images/grid-info-01.jpg',
  title: 'KỸ NĂNG MỀM',
  children:
    'Tại Lampart, nhân viên không chỉ có môi trường thực tế để ứng dụng kỹ thuật tiên tiến nhất, mà còn được chú trọng nâng cao tầm nhận thức, phát triển kỹ năng mềm và tích lũy kinh nghiệm làm việc.',
};

export const Reverse = Template.bind({});
Reverse.args = {
  modifiers: 'reverse',
  image: '/images/grid-info-02.jpg',
  title: 'ĐÀO TẠO CHUYÊN SÂU DÀNH CHO THỰC TẬP SINH',
  children: (
    <>
      Giáo án đào tạo chuyên sâu với trọng tâm là kỹ thuật sử dụng trong dự án thực tế tại Lampart được soạn thảo từ các
      Giảng viên đang trực tiếp giảng dạy tại các trường Đại học tại TP. HCM
      <br />
      Giáo án được áp dụng riêng cho từng nhân viên giúp cho các bạn Thực Tập Sinh có cơ hội học tập song song với thực
      hành, tạo môi trường thuận lợi cho kiến thức được áp dụng thăng hoa vào thực tiễn một cách hoàn hảo.
    </>
  ),
};
