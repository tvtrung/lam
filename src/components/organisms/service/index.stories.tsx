import { ComponentMeta, ComponentStory } from '@storybook/react';
import Service from '.';

export default {
  title: 'Components/Organisms/Service',
  component: Service,
} as ComponentMeta<typeof Service>;

const Template: ComponentStory<typeof Service> = args => <Service {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'DỊCH VỤ',
  linkUrl: '/service',
  logo: [
    '/images/logos/logo-linux.png',
    '/images/logos/logo-apache.png',
    '/images/logos/logo-mySQL.png',
    '/images/logos/logo-php.png',
    '/images/logos/logo-postgreSQL.png',
    '/images/logos/logo-lavarel.png',
    '/images/logos/logo-vue.png',
    '/images/logos/logo-vuetify.png',
    '/images/logos/logo-nuxt.png',
    '/images/logos/logo-flutter.png',
    '/images/logos/logo-amazon.png',
    '/images/logos/logo-firebase.png',
    '/images/logos/logo-docker.png',
    '/images/logos/logo-redis.png',
    '/images/logos/logo-dwoo.png',
    '/images/logos/logo-jwt.png',
    '/images/logos/logo-xamarin.png',
    '/images/logos/logo-nifty.png',
  ],
  content:
    'Lampart đang cung cấp các dịch vụ Tư vấn và lập kế hoạch xây dựng nội dung phát triển phần mềm hệ thống, pháttriển và bảo trì phần mềm, thiết kế và xây dựng Website cho các quý khách hàng Doanh nghiệp tại Nhật Bản. Đồng thời chúng tôi cung cấp dịch vụ thành lập công ty và tuyển dụng nguồn Nhân lực cho các đối tác Nhật Bản có nhu cầu thành lập Công ty tại Việt Nam.',
};
