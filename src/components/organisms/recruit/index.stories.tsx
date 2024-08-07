import { ComponentMeta, ComponentStory } from '@storybook/react';
import Recruit from '.';

export default {
  title: 'Components/Organisms/Recruit',
  component: Recruit,
  parameters: {
    paddings: 0,
  },
} as ComponentMeta<typeof Recruit>;

const Template: ComponentStory<typeof Recruit> = args => <Recruit {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'VỊ TRÍ ĐANG TUYỂN',
  jobs: [
    { url: '#', position: 'Intern PHP Developer' },
    { url: '#', position: 'Senior QC' },
    { url: '#', position: 'Intern QC' },
    { url: '#', position: 'IT Communicator' },
    { url: '#', position: 'Front end Developer' },
    { url: '#', position: 'Intern Engineer' },
  ],
  linkUrl: '/recruit',
};
