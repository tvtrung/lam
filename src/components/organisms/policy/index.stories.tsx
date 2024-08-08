import { ComponentMeta, ComponentStory } from '@storybook/react';
import Policy from './';

export default {
  title: 'Components/Organisms/Policy',
  component: Policy,
} as ComponentMeta<typeof Policy>;

const Template: ComponentStory<typeof Policy> = args => <Policy {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'CHÍNH SÁCH',
  innerTitle: (
    <>
      Luôn cống hiến và đồng hành
      <br />
      cùng sự phát triển của khách hàng
    </>
  ),
  image: '/images/policy.jpg',
  number: '03',
  children: (
    <>
      Công ty được phát triển và lớn mạnh chính là nhờ sự phát triển đi lên của nhân viên
      <br />
      <br />
      Sự cống hiến để đóng góp vào sự phát triển của khách hàng chính là nhờ sự phát triển của công ty.
    </>
  ),
};
