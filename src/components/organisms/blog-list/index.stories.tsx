import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from 'components/molecules/card';
import BlogList from './';

export default {
  title: 'Components/Organisms/BlogList',
  component: BlogList,
} as ComponentMeta<typeof BlogList>;

const Template: ComponentStory<typeof BlogList> = args => <BlogList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <Card
      image={'/images/blog-thumb-01.jpg'}
      date={'20.10.2021'}
      title={'Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)'}
      category={'CULTURE'}
      linkUrl={'#'}
      modifiers={'blog'}
      isNew
      viewCount={12}
    />,
    <Card
      image={'/images/blog-thumb-02.jpg'}
      date={'20.10.2021'}
      title={'Seminar Công nghệ và sự đổi mới trong năm 2022'}
      category={'TECH'}
      linkUrl={'#'}
      modifiers={'blog'}
      isNew
      viewCount={8}
    />,
    <Card
      image={'/images/blog-thumb-03.jpg'}
      date={'20.10.2021'}
      title={'Banana Day 2019'}
      category={'PARTY'}
      linkUrl={'#'}
      modifiers={'blog'}
      isNew
      viewCount={2}
    />,
    <Card
      image={'/images/blog-thumb-04.jpg'}
      date={'20.10.2021'}
      title={'Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)'}
      category={'CULTURE'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={12}
    />,
    <Card
      image={'/images/blog-thumb-05.jpg'}
      date={'20.10.2021'}
      title={'Seminar Công nghệ và sự đổi mới trong năm 2022'}
      category={'TECH'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={8}
    />,
    <Card
      image={'/images/blog-thumb-06.jpg'}
      date={'20.10.2021'}
      title={'Banana Day 2019'}
      category={'PARTY'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={2}
    />,
    <Card
      image={'/images/blog-thumb-07.jpg'}
      date={'20.10.2021'}
      title={'Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)'}
      category={'CULTURE'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={12}
    />,
    <Card
      image={'/images/blog-thumb-08.jpg'}
      date={'20.10.2021'}
      title={'Seminar Công nghệ và sự đổi mới trong năm 2022'}
      category={'TECH'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={8}
    />,
    <Card
      image={'/images/blog-thumb-09.jpg'}
      date={'20.10.2021'}
      title={'Banana Day 2019'}
      category={'PARTY'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={2}
    />,
    <Card
      image={'/images/blog-thumb-10.jpg'}
      date={'20.10.2021'}
      title={'Kỷ niệm 9 năm thành lập Công ty(26/11/2012 - 26/11/2021)'}
      category={'CULTURE'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={12}
    />,
    <Card
      image={'/images/blog-thumb-11.jpg'}
      date={'20.10.2021'}
      title={'Seminar Công nghệ và sự đổi mới trong năm 2022'}
      category={'TECH'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={8}
    />,
    <Card
      image={'/images/blog-thumb-12.jpg'}
      date={'20.10.2021'}
      title={'Banana Day 2019'}
      category={'PARTY'}
      linkUrl={'#'}
      modifiers={'blog'}
      viewCount={2}
    />,
  ],
  postNumber: '08',
};
