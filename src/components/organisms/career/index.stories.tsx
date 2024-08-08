import { ComponentMeta, ComponentStory } from '@storybook/react';
import Career from './';

export default {
  title: 'Components/Organisms/Career',
  component: Career,
} as ComponentMeta<typeof Career>;

const Template: ComponentStory<typeof Career> = args => <Career {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Lộ trình phát triển',
  careerStage: [
    {
      jobTitle: [
        <>
          Intern <br className="u-dn-sp" />
          Fresher
        </>,
      ],
      status: '0',
    },
    {
      jobTitle: [
        'Junior',
        'Middle',
        <>
          Senior
          <br />
          Specialist
        </>,
      ],
      status: '0',
    },
    {
      jobTitle: [
        <>
          Expert
          <br />
          (Technical)
        </>,
        <>
          Sub-Leader
          <br />
          (Human)
        </>,
      ],
      status: '1',
    },
    {
      jobTitle: [
        'Leader ',
        <>
          Senior <br className="u-dn-sp" />
          Leader
        </>,
      ],
      status: '0',
    },
    { jobTitle: ['Manager'], status: '0' },
  ],
};
