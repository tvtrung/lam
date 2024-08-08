import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from '.';

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  args: {
    children:
      'LAMPART has been going together with Vietnam during its 5 years operating in HCMC. We have learned much from Vietnam, and have been developing and expanding systems with people in Vietnam. That’s why I want to deliver Vietnamese engineers the know-how and knowledge cultivated in the same way in Japan.',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args}></Text>;

export const Normal = Template.bind({});

export const MediumText = Template.bind({});
MediumText.args = {
  modifiers: 'medium',
};

export const HighlightText = Template.bind({});
HighlightText.args = {
  modifiers: 'highlight',
};

export const GreenText = Template.bind({});
GreenText.args = {
  modifiers: 'green',
};

export const BorderHighlightText = Template.bind({});
BorderHighlightText.args = {
  modifiers: ['fz-medium', 'border-highlight'],
};
