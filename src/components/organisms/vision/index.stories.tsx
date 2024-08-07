import { ComponentMeta, ComponentStory } from '@storybook/react';
import Vision from './';

export default {
  title: 'Components/Organisms/Vision',
  component: Vision,
} as ComponentMeta<typeof Vision>;

const Template: ComponentStory<typeof Vision> = args => <Vision {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'TẦM NHÌN',
  innerTitle: (
    <>
      Đưa Châu Á trở thành
      <br />
      trung tâm công nghệ thế giới
    </>
  ),
  titleBg: 'philosophy',
  image: '/images/vision-dummy.jpg',
  number: '01',
  children: (
    <>
      Mang chất lượng Nhật Bản được quốc tế ca ngợi đến Việt Nam.
      <br />
      Và cùng với Việt Nam mang các dịch vụ ra toàn thế giới.
    </>
  ),
};
