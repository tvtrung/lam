import { ComponentMeta, ComponentStory } from '@storybook/react';
import Achievement from './';

export default {
  title: 'Components/Organisms/Achievement',
  component: Achievement,
} as ComponentMeta<typeof Achievement>;

const Template: ComponentStory<typeof Achievement> = args => <Achievement {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: '3 điều bạn có thể đạt được ở Lampart',
  listCard: [
    {
      image: '/images/card-info-img-01.jpg',
      title: 'Kỹ năng nền tảng (kỹ năng chuyên môn và kỹ năng mềm)',
      content: (
        <>
          Kỹ Năng chuyên môn được hiểu là những kiến thức và thực hành có tính chất kỹ thuật, chuyên môn nghề nghiệp. Kỹ
          Năng Mềm liên quan đến tính cách con người, không mang tính chuyên môn, được xem như khả năng hòa nhập, tương
          tác với xã hội, cộng đồng, tập thể.
          <br />
          Hai kỹ năng nền tảng này được Lampart đánh giá rất cao và được đưa vào tiêu chuẩn chung để đánh giá năng lực
          nhân viên.
        </>
      ),
      number: '01',
      onClick: e => {
        e?.preventDefault();
        const cardInfo = e?.currentTarget.closest('.m-card-info');
        cardInfo?.classList.add('m-card-info--showmore');
      },
    },
    {
      image: '/images/card-info-img-02.jpg',
      title: 'Năng lực phán đoán và khả năng thích ứng',
      content: (
        <>
          Năng lực phán đoán hỗ trợ cho việc xác nhận và hợp tác được linh hoạt và đưa ra các đối ứng phù hợp hơn trong
          quá trình làm việc đội, nhóm.
          <br />
          Kỹ năng thích ứng là kỹ năng nhanh chóng học hỏi các kiến thức mới, thích nghi nhanh để đáp ứng với những thay
          đổi của Công ty cũng như dự án để đạt được mục tiêu đề ra.
          <br />
          Hai năng lực này hỗ trợ nâng cao sự hợp tác chặt chẽ và bền bỉ hơn cho các hoạt động hợp tác đội nhóm trong
          các dự án.
        </>
      ),
      number: '02',
      onClick: e => {
        e?.preventDefault();
        const cardInfo = e?.currentTarget.closest('.m-card-info');
        cardInfo?.classList.add('m-card-info--showmore');
      },
    },
    {
      image: '/images/card-info-img-03.jpg',
      title: (
        <>
          Giao tiếp hiệu quả
          <br />
          (Báo cáo, Liên lạc, Thảo luận)
        </>
      ),
      content: (
        <>
          “Giao tiếp chính là cầu nối liên kết trong công ty”. Kỹ năng này được đúc kết bằng 3 từ Horenso (Có nghĩa:
          “Báo cáo - Liên lạc - Thảo luận”).
          <br />
          Trong dự án hay công việc hằng ngày, khi bạn không hiểu hoặc cảm thấy nhiệm vụ vượt qua giới hạn kiến thức sẵn
          có thì Lampart luôn khuyến khích bạn Báo cáo tình hình, Liên lạc khi cần thiết, và Thảo Luận khi bạn gặp khó
          khăn với Cấp trên, với Đồng nghiệp xung quanh. Horenso không chỉ giúp bạn nhanh chóng hoàn thành nhiệm vụ mà
          còn hỗ trợ bạn tạo được mối quan hệ tốt với đồng nghiệp, xây dựng sự tin tưởng với cấp trên và nhờ vậy bản
          thân bạn cũng sẽ có những bước phát triển “nhảy vọt” trong công việc.
        </>
      ),
      number: '03',
      onClick: e => {
        e?.preventDefault();
        const cardInfo = e?.currentTarget.closest('.m-card-info');
        cardInfo?.classList.add('m-card-info--showmore');
      },
    },
  ],
};
