import { ComponentMeta, ComponentStory } from '@storybook/react';
import Form from 'components/organisms/form';
import Link from 'next/link';
import React from 'react';
import Modal from '.';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const TemplateForm: ComponentStory<typeof Modal> = args => (
  <Modal {...args}>
    <Form
      className="o-modal__form"
      errorTerm="Vui lòng đồng ý với điều khoản sử dụng thông tin cá nhân."
      title={
        <>
          TRỞ THÀNH <br />
          THÀNH VIÊN LAMPART
        </>
      }
      introText="Bạn có muốn cùng làm việc với chúng tôi tại Lampart - nơi mỗi một cá nhân đều có thể học hỏi và trưởng thành hay không ? Hãy ứng tuyển tại Biểu mẫu phía dưới nếu bạn cảm thấy có hứng thú nhé."
      annotationLabel="Bảo mật thông tin"
      annotationText="Thông tin cá nhân mà bạn cung cấp sẽ được bảo mật và chỉ được sử dụng cho mục đích liên lạc tuyển dụng như gửi tài liệu, e-mail và trao đổi bằng điện thoại và không sử dụng  cho mục đích cá nhân khác."
      termText="Tôi đồng ý với các điều khoản về sử dụng thông tin cá nhân"
      onClose={() => {return;}}
    >
      Bạn có thể ứng tuyển qua{' '}
      <Link href="/">
        <a>Link</a>
      </Link>{' '}
      sau. Hoặc gửi thông tin đến email recruit@lampart-vn.com
    </Form>
  </Modal>
);

export const ModalForm = TemplateForm.bind({});
ModalForm.args = {
  open: true,
};
