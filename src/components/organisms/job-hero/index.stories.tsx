import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobHero from './';

export default {
  title: 'Components/Organisms/JobHero',
  component: JobHero,
} as ComponentMeta<typeof JobHero>;

const Template: ComponentStory<typeof JobHero> = args => <JobHero {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'TUYỂN DỤNG', leftBg: '/images/jobs-bg.jpg', image: '/images/jobs-image.jpg' };
