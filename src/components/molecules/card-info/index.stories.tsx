import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardInfo from './';

export default {
  title: 'Components/Molecules/CardInfo',
  component: CardInfo,
} as ComponentMeta<typeof CardInfo>;

const Template: ComponentStory<typeof CardInfo> = args => <CardInfo {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: '/images/card-info-img-01.jpg',
  title: (
    <>
      Kỹ năng nền tảng (kỹ năng
      <br />
      chuyên môn và kỹ năng mềm)
    </>
  ),
  content: (
    <>
      Kỹ Năng chuyên môn được hiểu là những kiến thức và thực hành có tính chất kỹ thuật, chuyên môn nghề nghiệp. Kỹ
      Năng Mềm liên quan đến tính cách con người, không mang tính chuyên môn, được xem như khả năng hòa nhập, tương tác
      với xã hội, cộng đồng, tập thể.
      <br />
      Hai kỹ năng nền tảng này được Lampart đánh giá rất cao và được đưa vào tiêu chuẩn chung để đánh giá năng lực nhân
      viên.
    </>
  ),
  number: '01',
  onClick: e => {
    e?.preventDefault();
  },
};
