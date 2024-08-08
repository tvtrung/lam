import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tech from './';

export default {
  title: 'Components/Organisms/Tech',
  component: Tech,
} as ComponentMeta<typeof Tech>;

const Template: ComponentStory<typeof Tech> = args => <Tech {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'CÔNG NGHỆ',
  image: '/images/tech-img-dummy.jpg',
  techs: [
    {
      techImage: '',
      techTitle: 'Lavarel',
      techContent:
        'Laravel là một Framework được phát triển dựa trên ngôn ngữ lập trình PHP, hoàn toàn miễn phí, và được sử dụng rộng rãi. Tính năng nổi bật của Laravel là sự linh hoạt, cấu trúc rõ ràng, mô hình chuẩn MVC điều này giúp cho các developer tiếp cận một cách nhanh chóng, tốc độ phát triển dự án cũng được cải thiện. Ngoài ra Laravel cũng có tính ổn định cao, cộng đồng phát triển lớn, bảo mật tốt, … Dựa vào một số ưu điểm này thì Lampart quyết định chọn Laravel để phát triển một số dự án của công ty.',
    },
    {
      techImage: '',
      techTitle: 'Vue.js',
      techContent:
        'Trên thị trường hiện nay có rất nhiều những Framework JavaScript, Vue.js là một trong những Framework JavaScript phổ biến nhất hiện nay. Việc sử dụng Vue.js kết hợp với Lampart đang là sự lựa chọn của nhiều sản phẩm công nghệ, với Vue.js thì việc phát triển code ở phía Front-end trở nên dễ dàng, nhanh chóng. Sẽ là một thiếu sót nếu sử dụng VueJS mà không nhắc đến các thư viện như Vuetify, Framework NuxtJS (Auth, API, Proxy) … Tại Lampart chúng tôi cũng áp dụng triệt để các công nghệ này vào các dự án. ',
    },
  ],
};
