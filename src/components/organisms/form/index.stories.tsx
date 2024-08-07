import { ComponentMeta, ComponentStory } from '@storybook/react';
import Link from 'next/link';
import Form from '.';

export default {
  title: 'Components/Organisms/Form',
  component: Form,
  parameters: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = args => <Form {...args} />;
const data = {
  title: (
    <>
      TRỞ THÀNH <br />
      THÀNH VIÊN LAMPART
    </>
  ),
  introText:
    'Bạn có muốn cùng làm việc với chúng tôi tại Lampart - nơi mỗi một cá nhân đều có thể học hỏi và trưởng thành hay không ? Hãy ứng tuyển tại Biểu mẫu phía dưới nếu bạn cảm thấy có hứng thú nhé.',
  annotationLabel: 'Bảo mật thông tin',
  annotationText:
    'Thông tin cá nhân mà bạn cung cấp sẽ được bảo mật và chỉ được sử dụng cho mục đích liên lạc tuyển dụng như gửi tài liệu, e-mail và trao đổi bằng điện thoại và không sử dụng  cho mục đích cá nhân khác.',
  termText: 'Tôi đồng ý với các điều khoản về sử dụng thông tin cá nhân',
  onClose: () => {return;}
};
export const Normal = Template.bind({});
Normal.args = { ...data };

export const Error = Template.bind({});
Error.args = {
  ...data
};
