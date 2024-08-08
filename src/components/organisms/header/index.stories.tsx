import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from './';

export default {
  title: 'Components/Organisms/Header',
  component: Header,
  parameters: { backgrounds: { default: 'transparent' }, paddings: { default: 'none' } },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  menu: [
    { title: 'GIỚI THIỆU', link: '/' },
    { title: 'DỊCH VỤ', link: '/' },
    { title: 'BLOG', link: '/' },
    { title: 'TUYỂN DỤNG', link: '/' },
  ],
  language: 'JA',
  recruitButtonText: 'ỨNG TUYỂN',
  onClickRecruit: () => {
    // eslint-disable-next-line no-console
    console.log('Recruit Button Clicked');
  },
  onClickLanguage: () => {
    // eslint-disable-next-line no-console
    console.log('Language Switch Clicked');
  },
};
