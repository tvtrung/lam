import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from '.';

export default {
  title: 'Components/Atoms/Image',
  component: Image,
  args: { src: '/images/dummy-1.jpg', spsrc: 'images/dummy-2.jpg' },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  width: 256,
  height: 256,
  className: 'add-more-class',
};

export const LazyLoad = Template.bind({});
LazyLoad.args = {
  width: 256,
  height: 256,
  islazy: true,
};
