import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '.';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  linkText: 'Xem thêm',
  linkUrl: '#',
};

export const WithArrowDown = Template.bind({});
WithArrowDown.args = {
  modifiers: 'arrow-down',
  linkText: 'Xem thêm',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};

export const FillGreen = Template.bind({});
FillGreen.args = {
  modifiers: ['fill', 'green'],
  noIcon: true,
  linkText: 'VỊ TRÍ ĐANG TUYỂN',
  linkUrl: '#',
};

export const FillBlack = Template.bind({});
FillBlack.args = {
  modifiers: ['fill', 'black'],
  noIcon: true,
  linkText: 'VỊ TRÍ ĐANG TUYỂN',
  linkUrl: '#',
};

export const Reverse = Template.bind({});
Reverse.args = {
  modifiers: 'arrow-left',
  isReverse: true,
  linkText: 'VỊ TRÍ ĐANG TUYỂN',
  linkUrl: '#',
};
