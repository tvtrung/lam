import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobDetail from './';

export default {
  title: 'Components/Organisms/JobDetail',
  component: JobDetail,
} as ComponentMeta<typeof JobDetail>;

const Template: ComponentStory<typeof JobDetail> = args => <JobDetail {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  jobTitle: 'MIDDLE / SENIOR QC ENGINER (TESTER)',
  workModelList: ['Hybrid', 'Remote', 'Fulltime'],
  tabs: [
    {
      title: 'Kỹ năng yêu cầu',
      content: (
        <>
          · Yêu cầu dành cho level senior:
          <br /> · Có thể quản lý 2-3 thành viên, kỹ năng lãnh đạo, cộng tác và thuyết trình tốt.
          <br /> · Thành thạo trong việc tạo test plan
          <br /> · Rèn luyện kỹ năng Yêu cầu chung
          <br /> · 2-3 năm kinh nghiệm thử nghiệm trở lên
          <br /> · Có kinh nghiệm về SQL Query: MySQL / SQL Server / Oracle / …
          <br /> · Hiểu biết tốt về các loại test và công cụ quản lý test
          <br /> · Có kinh nghiệm làm việc với trình duyệt Desktop and Mobile browser cũng như browser inspector
        </>
      ),
    },
    {
      title: 'Lợi thế',
      content: (
        <>
          Có kiến ​​thức / kinh nghiệm về các chuyên đề sau là một lợi thế:
          <br />○ Load testing
          <br />○ Performance testing
          <br />○ Responsive testing
          <br />○ Mobile application testing
          <br />○ Kiến thức cơ bản về HTML, CSS, Client / Server
          <br />○ Kinh nghiệm quản lý nhóm
          <br />○ Làm việc theo nhóm hoặc độc lập.
          <br />○ Tiếng Anh hoặc tiếng Nhật: Đọc tài liệu / Giao tiếp
          <br />○ Kỹ năng quan hệ con người
          <br />○ Tự động hóa: Selenium, Sikuli, CodedUI, …
          <br />○ Lập kế hoạch test
          <br />○ Báo cáo
          <br /> Suy nghĩ tích cực và có tinh thần cầu tiến
          <br /> Tư duy logic và kỹ năng phân tích tốt.
          <br /> Tư duy cởi mở và linh hoạt trong việc điều chỉnh quy trình của dự án
        </>
      ),
    },
    {
      title: 'Mô tả công việc',
      content: (
        <>
          · Lập kế hoạch kiểm tra
          <br />
          · Phân tích nghiệp vụ và làm rõ các vấn đề của dự án, Q&A tốt với khách hàng.
          <br />
          · Thực hiện viết checklist, test cases, test procedures, test reports, defect log, …
          <br />
          · Quản lý và thực hiện test theo kế hoạch, bao gồm cả việc cung cấp test results dựa trên test status, test
          reports.
          <br />
          · Phối hợp với các team khác để hoàn thành tốt công việc.
          <br />· Hoàn thành các công việc được giao đúng tiến độ.
        </>
      ),
    },
    {
      title: 'Quyền lợi',
      content: (
        <>
          · Với tình hình Covid-19 hiện tại, công ty áp dụng chế độ trả full lương trong thời gian nhân viên bị cách ly
          tại nhà hoặc tại cơ sở y tế, ngoài ra, Lampart luôn linh động các chế độ trong thời kỳ này để đảm bảo sức khỏe
          nhân viên một cách tốt nhất.
          <br />
          · Thời gian làm việc: 8:00 ~ 17:00 từ thứ 2 đến thứ 6 (nghỉ Thứ Bảy, Chủ Nhật và các ngày Lễ, Tết)
          <br />
          · Hoạt động:
          <br />
          · Du lịch công ty & Khám sức khỏe: 1 năm/ 1 lần.
          <br />
          · Thưởng: 2 lần/năm
          <br />
          · Review lương: tối thiểu 1 lần/ năm
          <br />
          · Hoạt động vui chơi, ăn uống trong team được tài trợ bằng chi phí teambuilding của công ty cho các team hằng
          tháng.
          <br />
          · Các buổi tiệc như Halloween, Giáng Sinh, Year End Party, sinh nhật hàng tháng, ….
          <br />
          · Hoạt động thể dục, thể thao thường xuyên với các câu lạc bộ: bóng đá, cầu lông v.v….
          <br />
          · Ngoài các gói bảo hiểm cơ bản theo quy định của Luật Lao Động, bạn còn được tham gia gói bảo hiểm tai nạn
          lao động tại Lampart.
          <br />
          · Ngày nghỉ đặc biệt dành cho nhân viên nữ: 0.5 ngày/ tháng.
          <br />
          · Chương trình quà tết, bánh trung thu, tiền mừng đám cưới (5,000,000 VND), tiền mừng khi sanh con (2,000,000
          VND),…
          <br />
          · Đối với nhân viên ký hợp đồng không xác định thời hạn: từ thời điểm ký hợp đồng không xác định thời hạn, cứ
          mỗi năm được cộng thêm 1 ngày nghỉ phép. Ngày nghỉ phép không sử dụng hết trong năm sẽ trả vào lương tháng
          cuối cùng của năm.
          <br />· Chế độ đào tạo: Công ty luôn chú trọng đào tạo cho tất cả các nhân viên có thể phát triển, ngoài chế
          độ đào tạo nội bộ, bạn có thể tham gia chế độ cho nhân viên đi học bên ngoài nếu xét thấy việc học cần thiết
          để nâng cao kiến thức áp dụng vào công việc (tùy vào hình thức học có thể hỗ trợ 100% học phí).
        </>
      ),
    },
  ],
};
