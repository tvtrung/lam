import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from '.';

export default {
  title: 'Components/Atoms/Title',
  component: Title,
  parameters: { backgrounds: { default: 'transparent' } },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => <Title {...args}></Title>;

export const Normal = Template.bind({});
Normal.args = {
  tag: 'h1',
  children: (
    <>
      BẠN CÓ THỂ <br />
      ĐẠT ĐƯỢC Ở LAMPART
    </>
  ),
};

export const Center = Template.bind({});
Center.args = {
  tag: 'h1',
  align: 'center',
  children: (
    <>
      BẠN CÓ THỂ <br />
      ĐẠT ĐƯỢC Ở LAMPART
    </>
  ),
};

export const Inverse = Template.bind({});
Inverse.args = {
  tag: 'h1',
  modifiers: 'inverse',
  children: 'VỊ TRÍ ĐANG TUYỂN',
};

export const HasUnderline = Template.bind({});
HasUnderline.args = {
  tag: 'h1',
  modifiers: 'underline',
  children: 'TUYỂN DỤNG',
};

export const HasHighlight = Template.bind({});
HasHighlight.args = {
  tag: 'h1',
  modifiers: 'highlight',
  children: 'Xây dựng hệ thống kinh doanh của nhà sản xuất nước uống lớn',
};

export const HasUnderlineGreen = Template.bind({});
HasUnderlineGreen.args = {
  tag: 'h1',
  modifiers: ['underline', 'green'],
  children: 'TẦM NHÌN',
};
