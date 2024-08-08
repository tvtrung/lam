/* eslint-disable @next/next/no-img-element */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import BlogWrapper from './';

export default {
  title: 'Components/Organisms/BlogWrapper',
  component: BlogWrapper,
} as ComponentMeta<typeof BlogWrapper>;

const Template: ComponentStory<typeof BlogWrapper> = args => <BlogWrapper {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  bgTitle: 'BLOG',
  title: (
    <>
      Kỷ niệm 9 năm thành lập Công ty
      <br />
      (26/11/2012 - 26/11/2021)
    </>
  ),
  date: '20.10.2021',
  category: 'CULTURE',
  like: 8,
  children: (
    <>
      <p>
        Trong cuộc đời mỗi người đều có một ngày trọng đại mà chúng ta không bao giờ quên, đó chính là sinh nhật của
        chính mình. Và đối với công ty cũng vậy, ngày sinh nhật là ngày vô cùng quan trọng, để nhắc nhở chúng ta{' '}
        <mark>về những trải nghiệm đã qua</mark>, những bài học để trưởng thành cùng những giá trị tinh thần mà Công ty
        mang lại và đặc biệt là những <mark>quyết tâm và ý chí của bản thân mỗi người</mark> cùng với công ty{' '}
        <mark>tôi luyện mỗi ngày</mark> để có thể đạt được thành tựu to lớn hơn và hơn hết là để{' '}
        <mark>vững chắc hơn trên con đường đồng hành</mark> và phát triển cùng Công ty trong tương lai. Đó là ý nghĩa
        của buổi tiệc Sinh nhật công ty muốn gửi gắm đến từng thành viên của Lampart.
      </p>
      <div className="u-column-2" data-gap="70">
        <h4>
          Hy vọng buổi tiệc sẽ đem lại những kỷ niệm vui và có thêm động lực để Nhân viên cùng Công ty tiếp tục vượt qua
          đại dịch và phát triển tốt hơn trong tương lai.
        </h4>
        <p>
          Sau 6 tháng làm việc tại nhà, cơ hội giao lưu giữa các Nhân viên bị hạn chế khá nhiều. Buổi tiệc Sinh nhật mặc
          dù được tổ chức Online nhưng nhận được rất nhiều sự hưởng ứng và háo hức tham gia từ toàn thể Nhân viên.
          <br />
          Sau đây là một số hình ảnh ấm cúng của tiệc, mọi người xem nhé.
        </p>
      </div>
      <h2>THÔNG ĐIỆP TỪ CEO</h2>
      <p>
        {/* MEMO: using unity class for demo, class might be different with 3rd parties editor */}
        <img className="u-dn-pc" src="/images/blog-content-img-01-sp.jpg" alt="CEO message" />
        <img className="u-dn-pc" src="/images/blog-content-img-02-sp.jpg" alt="CEO message" />
        <img className="u-dn-sp" src="/images/blog-content-img-01-pc.jpg" alt="CEO message" />
      </p>
      <p>
        <img className="u-dn-sp" src="/images/blog-content-img-03-pc.jpg" alt="" />
      </p>
      <p>
        <img className="u-dn-pc" src="/images/blog-content-img-03.jpg" alt="" />
      </p>
      <p>
        <img className="u-dn-pc" src="/images/blog-content-img-04.jpg" alt="" />
      </p>
      <p>
        <img className="u-dn-pc" src="/images/blog-content-img-05.jpg" alt="" />
      </p>
    </>
  ),
  prevUrl: '#',
  nextUrl: '#',
};
