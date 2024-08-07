import { ComponentMeta, ComponentStory } from '@storybook/react';
import Share from './';

export default {
  title: 'Components/Organisms/Share',
  component: Share,
} as ComponentMeta<typeof Share>;

const Template: ComponentStory<typeof Share> = args => <Share {...args} />;

export const Normal = Template.bind({});
Normal.args = { url: 'https://www.youtube.com/channel/UCpGRDsAp0bVTF2tAYXx_7WA' };
