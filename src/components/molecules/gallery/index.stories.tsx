import { ComponentMeta, ComponentStory } from '@storybook/react';
import Gallery from './';

export default {
  title: 'Components/Molecules/Gallery',
  component: Gallery,
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = args => <Gallery {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  images: [
    '/images/gallery-img-01.jpg',
    '/images/gallery-img-02.jpg',
    '/images/gallery-img-03.jpg',
    '/images/gallery-img-04.jpg',
    '/images/gallery-img-05.jpg',
    '/images/gallery-img-06.jpg',
  ],
};
