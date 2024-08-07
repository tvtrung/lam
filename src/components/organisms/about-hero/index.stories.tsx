import { ComponentMeta, ComponentStory } from '@storybook/react';
import AboutHero from './';

export default {
  title: 'Components/Organisms/AboutHero',
  component: AboutHero,
} as ComponentMeta<typeof AboutHero>;

const Template: ComponentStory<typeof AboutHero> = args => <AboutHero {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  innerTitle: 'GIỚI THIỆU',
  intro: (
    <>
      <span className="a-bgslide-text a-animated-block a-delay-animated-2">
        <span>
          LAMPART đem đến cơ hội và tạo điều kiện
          <br />
          <em className="a-bgslide-text a-animated-block a-bgslide-text--green a-delay-animated-2">
            <span>cho tất cả nhân viên thể hiện được tư duy và suy nghĩ</span>
          </em>
          &nbsp;áp dụng vào công việc
        </span>
      </span>
    </>
  ),
  content: (
    <>
      Sứ mệnh của Lampart là cung cấp và đem đến dịch vụ thỏa mãn nhu cầu của khách hàng khi sử dụng.
      <br />
      <br />
      Chúng tôi luôn hy vọng sẽ tiếp tục được phục vụ khách hàng và nhận được phản hồi từ khách hàng nhằm cải thiện dịch
      vụ của mình để thực hiện sứ mệnh đề ra. Hãy để Lampart phát triển và sáng tạo “Hệ thống Ứng dụng Web” dành cho
      bạn.
    </>
  ),
  bgTitle: 'THINKING',
};
