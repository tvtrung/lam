import { ComponentMeta, ComponentStory } from '@storybook/react';
import Container from 'components/organisms/container';
import { General } from './';

export default {
  title: 'Components/Templates/General',
  component: General,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof General>;

const Template: ComponentStory<typeof General> = args => <General {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <Container>
      <section>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consequuntur sint tenetur quasi enim perferendis,
          deserunt quisquam, rem neque cumque dolor. Veritatis minima, eligendi dolorum maiores numquam ullam! Libero,
          eos!
        </p>
      </section>
    </Container>
  ),
};
