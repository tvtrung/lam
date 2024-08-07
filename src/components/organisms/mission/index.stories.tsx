import { ComponentMeta, ComponentStory } from '@storybook/react';
import Mission from './';

export default {
  title: 'Components/Organisms/Mission',
  component: Mission,
} as ComponentMeta<typeof Mission>;

const Template: ComponentStory<typeof Mission> = args => <Mission {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'NHIỆM VỤ',
  highlightText: 'Công ty cảm ơn vì có nhân viên, nhân viên cảm ơn vì có công ty',
  content: (
    <>
      Tương tự như sự kết hợp từ rất nhiều bộ phận với các chức năng đặc trưng khác nhau để tạo nên cơ thể người, Công
      ty được hình thành và phát triển đều dựa vào sự hỗ trợ và hợp tác của từng nhân viên.
      <br />
      <br />
      Vì vậy, Chúng ta hãy luôn ghi nhớ lòng biết ơn này và trao đam mê cùng với sức mạnh đến từng dự án của khách hàng,
      Giúp Khách hàng đóng một vai trò tích cực trong xã hội.
    </>
  ),
  image: '/images/mission-img-dummy.jpg',
  number: '02',
};
