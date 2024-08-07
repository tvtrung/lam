import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobTitle from './';

export default {
  title: 'Components/Atoms/JobTitle',
  component: JobTitle,
} as ComponentMeta<typeof JobTitle>;

const Template: ComponentStory<typeof JobTitle> = args => <JobTitle {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'IT Communicator' };

export const Selectable = Template.bind({});
Selectable.args = { modifiers: 'selectable', title: 'Senior Web Developer (Frontend)' };

export const Active = Template.bind({});
Active.args = { modifiers: ['selectable', 'active'], title: 'Senior/Middle QC Engineer (Tester)' };
