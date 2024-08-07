import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialNetworkService from './';

export default {
  title: 'Components/Organisms/SocialNetworkService',
  component: SocialNetworkService,
} as ComponentMeta<typeof SocialNetworkService>;

const Template: ComponentStory<typeof SocialNetworkService> = args => <SocialNetworkService {...args} />;

export const Normal = Template.bind({});
