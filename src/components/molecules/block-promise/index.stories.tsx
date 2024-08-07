import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlockPromise from '.';

export default {
  title: 'Components/Molecules/BlockPromise',
  component: BlockPromise,
} as ComponentMeta<typeof BlockPromise>;

const Template: ComponentStory<typeof BlockPromise> = args => <BlockPromise {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  icon: 'base-skill',
  title: (
    <>
      Kỹ năng nền tảng (kỹ năng
      <br />
      chuyên môn và kỹ năng mềm)
    </>
  ),
};
