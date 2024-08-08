import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from 'components/atoms/text';
import Container from './';

export default {
  title: 'Components/Organisms/Container',
  component: Container,
  args: {
    children: (
      <Text>
        LAMPART has been going together with Vietnam during its 5 years operating in HCMC. We have learned much from
        Vietnam, and have been developing and expanding systems with people in Vietnam. That’s why I want to deliver
        Vietnamese engineers the know-how and knowledge cultivated in the same way in Japan.
      </Text>
    ),
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => <Container {...args} />;

export const Normal = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  modifiers: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  modifiers: 'medium',
};
