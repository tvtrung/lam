import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from 'components/atoms/button';
import Text from 'components/atoms/text';
import JobList from './';

export default {
  title: 'Components/Organisms/JobList',
  component: JobList,
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [{ name: 'gray', value: '#ccc' }],
    },
  },
} as ComponentMeta<typeof JobList>;

const Template: ComponentStory<typeof JobList> = args => <JobList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  openedJobs: {
    title: 'Job đang tuyển',
    jobs: [
      {
        name: 'Senior/Middle QC Engineer (Tester)',
        isActive: true,
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior Web Developer (Frontend)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Web Developer (Frontend)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Business Analyst',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'IT Communicator',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior Mobile',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior PHP',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior C#',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Intern ITC',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Intern QC',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Intern PHP',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior/Middle QC Engineer (Tester)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior Web Developer (Frontend)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Web Developer (Frontend)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Business Analyst',
        onClick: e => {
          e?.preventDefault();
        },
      },
    ],
    content: (
      <Text modifiers={['border-highlight', 'fz-medium']}>
        Chúng tôi luôn mong muốn có cơ hội hợp tác với các bạn. Nếu không tìm được vị trí của mình, bạn có thể nộp hồ sơ
        vào công ty chúng tôi, chúng tôi luôn chào đón bạn.{' '}
        <Button linkUrl="#" linkText="Ứng tuyển với vị trí khác" noIcon />
      </Text>
    ),
  },
  closedJobs: {
    title: 'Job đã đóng',
    jobs: [
      {
        name: 'Senior/Middle QC Engineer (Tester)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior Web Developer (Frontend)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Web Developer (Frontend)',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Business Analyst',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'IT Communicator',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior Mobile',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior PHP',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Senior C#',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Intern ITC',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Intern QC',
        onClick: e => {
          e?.preventDefault();
        },
      },
      {
        name: 'Intern PHP',
        onClick: e => {
          e?.preventDefault();
        },
      },
    ],
  },
};
