import { ComponentMeta, ComponentStory } from '@storybook/react';
import Definition from './';

export default {
  title: 'Components/Molecules/Definition',
  component: Definition,
} as ComponentMeta<typeof Definition>;

const Template: ComponentStory<typeof Definition> = args => <Definition {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Kỹ năng yêu cầu',
  content: (
    <>
      · Yêu cầu dành cho level senior:
      <br />
      · Có thể quản lý 2-3 thành viên, kỹ năng lãnh đạo, cộng tác và thuyết trình tốt.
      <br />
      · Thành thạo trong việc tạo test plan
      <br />
      · Rèn luyện kỹ năng
      <br />
      Yêu cầu chung
      <br />
      · 2-3 năm kinh nghiệm thử nghiệm trở lên
      <br />
      · Có kinh nghiệm về SQL Query: MySQL / SQL Server / Oracle / …<br />
      · Hiểu biết tốt về các loại test và công cụ quản lý test
      <br />· Có kinh nghiệm làm việc với trình duyệt Desktop and Mobile browser cũng như browser inspector
    </>
  ),
};

export const Row = Template.bind({});
Row.args = {
  modifiers: 'row',
  title: 'Kỹ năng yêu cầu',
  content: (
    <>
      · Yêu cầu dành cho level senior:
      <br />
      · Có thể quản lý 2-3 thành viên, kỹ năng lãnh đạo, cộng tác và thuyết trình tốt.
      <br />
      · Thành thạo trong việc tạo test plan
      <br />
      · Rèn luyện kỹ năng
      <br />
      Yêu cầu chung
      <br />
      · 2-3 năm kinh nghiệm thử nghiệm trở lên
      <br />
      · Có kinh nghiệm về SQL Query: MySQL / SQL Server / Oracle / …<br />
      · Hiểu biết tốt về các loại test và công cụ quản lý test
      <br />· Có kinh nghiệm làm việc với trình duyệt Desktop and Mobile browser cũng như browser inspector
    </>
  ),
};
