import { ComponentMeta, ComponentStory } from '@storybook/react';
import Message from './';

export default {
  title: 'Components/Organisms/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = args => <Message {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  name: 'KAZUYASU KAWAHARA',
  title: 'THÔNG ĐIỆP TỪ CEO',
  content: (
    <>
      Sứ mệnh của chúng tôi là trở thành một doanh nghiệp tạo dựng được niềm tin và sự kì vọng từ khách hàng bằng việc
      cống hiến hết mình cho công việc kinh doanh và phát triển của Quý khách hàng.
      <br />
      Tuy nhiên, để thực hiện và duy trì được điều này không phải là một công việc dễ dàng mà nó đòi hỏi rất nhiều từ sự
      học hỏi và hoàn thiện của từng thành viên trong công ty.
    </>
  ),
  image: '/images/message-img-dummy.jpg',
  linkUrl: '#',
};
