import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormThankyou from '.';

export default {
  title: 'Components/Organisms/FormThankyou',
  component: FormThankyou,
  parameters: {},
} as ComponentMeta<typeof FormThankyou>;

const Template: ComponentStory<typeof FormThankyou> = args => <FormThankyou {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'CẢM ƠN BẠN',
  image: '/images/form-thankyou-img.svg',
  children: (
    <>
      Đơn ứng tuyển của bạn đã được gửi thành công. Cảm ơn bạn đã gửi đơn. <br />
      Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất. <br />
      Hi vọng sẽ trở thành đồng đội của bạn trong tương lai.
    </>
  ),
};
