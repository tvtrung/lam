import { ComponentMeta, ComponentStory } from '@storybook/react';
import OfficeImage from './';

export default {
  title: 'Components/Organisms/OfficeImage',
  component: OfficeImage,
} as ComponentMeta<typeof OfficeImage>;

const Template: ComponentStory<typeof OfficeImage> = args => <OfficeImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  images: [
    {
      src: '/images/office-pc.jpg',
      spsrc: '/images/office-sp.jpg',
    },
    { src: '/images/office-02-pc.jpg', spsrc: '/images/office-02-pc.jpg' },
  ],
};
