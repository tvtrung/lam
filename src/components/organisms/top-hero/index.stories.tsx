import { ComponentMeta, ComponentStory } from '@storybook/react';
import TopHero from './';

export default {
  title: 'Components/Organisms/TopHero',
  component: TopHero,
} as ComponentMeta<typeof TopHero>;

const Template: ComponentStory<typeof TopHero> = args => <TopHero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Make the World IT Technology',
  image: '/images/kv/kv.jpg',

  content: (
    <>
      Đưa Châu Á trở thành trung tâm công nghệ thế giới
      <br />
      Mang chất lượng Nhật Bản được quốc tế ca ngợi đến Việt Nam.
      <br />
      Và cùng với Việt Nam mang các dịch vụ ra toàn thế giới.
    </>
  ),
  linkText: 'VỊ TRÍ ĐANG TUYỂN',
  linkUrl: '#',
};
