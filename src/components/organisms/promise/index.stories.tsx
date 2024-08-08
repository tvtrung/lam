import { ComponentMeta, ComponentStory } from '@storybook/react';
import Promise from './';

export default {
  title: 'Components/Organisms/Promise',
  component: Promise,
} as ComponentMeta<typeof Promise>;

const Template: ComponentStory<typeof Promise> = args => <Promise {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Bạn có thể đạt được ở Lampart',
  data: [
    {
      title: 'Kỹ năng nền tảng (kỹ năng chuyên môn và kỹ năng mềm)',
      icon: 'base-skill',
    },
    {
      title: 'Năng lực phán đoán & khả năng thích ứng',
      icon: 'predict-ability',
    },
    {
      title: 'Giao tiếp (Báo Cáo - Liên Lạc- Thảo Luận)',
      icon: 'horenso',
    },
  ],
};
