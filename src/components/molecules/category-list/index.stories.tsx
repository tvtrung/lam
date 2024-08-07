import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoryList from '.';

export default {
  title: 'Components/Molecules/CategoryList',
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = args => <CategoryList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  list: [
    {
      icon: 'document',
      label: 'Tất cả',
      amount: '56',
      linkCat: '/',
    },
    {
      icon: 'technology',
      label: 'Tin tức',
      amount: '18',
      linkCat: '/',
    },
    {
      icon: 'event',
      label: 'Sự kiện',
      amount: '12',
      linkCat: '/',
    },
    {
      icon: 'technology',
      label: 'Công nghệ',
      amount: '18',
      linkCat: '/',
    },
    {
      icon: 'culture',
      label: 'Văn hoá',
      amount: '10',
      linkCat: '/',
    },

    {
      icon: 'story',
      label: 'Chuyện nghề',
      amount: '07',
      linkCat: '/',
    },

    {
      icon: 'chat',
      label: 'Khác',
      amount: '03',
      linkCat: '/',
    },
  ],
};

export const Active = Template.bind({});
Active.args = {
  list: [
    {
      icon: 'document',
      label: 'Tất cả',
      amount: '56',
      linkCat: '/',
      active: true,
    },
    {
      icon: 'technology',
      label: 'Tin tức',
      amount: '18',
      linkCat: '/',
    },
    {
      icon: 'event',
      label: 'Sự kiện',
      amount: '12',
      linkCat: '/',
    },
    {
      icon: 'technology',
      label: 'Công nghệ',
      amount: '18',
      linkCat: '/',
    },
    {
      icon: 'culture',
      label: 'Văn hoá',
      amount: '10',
      linkCat: '/',
    },
    {
      icon: 'story',
      label: 'Chuyện nghề',
      amount: '07',
      linkCat: '/',
    },
    {
      icon: 'chat',
      label: 'Khác',
      amount: '03',
      linkCat: '/',
    },
  ],
};
