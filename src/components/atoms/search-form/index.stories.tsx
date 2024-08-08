import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchForm from '.';

export default {
  title: 'Components/Atoms/SearchForm',
  component: SearchForm,
} as ComponentMeta<typeof SearchForm>;

const Template: ComponentStory<typeof SearchForm> = args => <SearchForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: 'Tìm kiếm',
};
