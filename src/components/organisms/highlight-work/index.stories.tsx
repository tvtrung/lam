import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobTitle from 'components/atoms/job-title';
import Definition from 'components/molecules/definition';
import Procedure from 'components/molecules/procedure';
import HighlightWork, { LogoList } from './';

export default {
  title: 'Components/Organisms/HighlightWork',
  component: HighlightWork,
} as ComponentMeta<typeof HighlightWork>;

const Template: ComponentStory<typeof HighlightWork> = args => <HighlightWork {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  image: '/images/highlight-work-dummy-1.jpg',
  title: 'Xây dựng hệ thống kinh doanh của nhà sản xuất nước uống lớn',
  children: (
    <>
      <Definition
        title="Quy trình"
        modifiers="row"
        content={
          <Procedure
            procedure={[
              {
                iconSrc: '/images/icon-requirement.svg',
                content: (
                  <>
                    Lấy yêu cầu
                    <br />
                    từ khách hàng
                  </>
                ),
              },
              { iconSrc: '/images/icon-design.svg', content: 'Thiết kế' },
              { iconSrc: '/images/icon-dev.svg', content: 'Lập trình' },
              { iconSrc: '/images/icon-test.svg', content: 'Kiểm tra' },
              { iconSrc: '/images/icon-maintenance.svg', content: 'Bảo trì' },
            ]}
          />
        }
      />
      <Definition
        title="Tổng quan hệ thống"
        content="Hệ thống chức năng tính điểm của một nhà sản xuất nước uống lớn"
      />
      <Definition
        title="Người phụ trách"
        content={
          <>
            <JobTitle title="Front End Developer" />
            <JobTitle title="IT Communicator" />
            <JobTitle title="PHP Developer" />
            <JobTitle title="Project Manager" />
            <JobTitle title="Business Analyst" />
            <JobTitle title="QC" />
          </>
        }
      />
      <Definition
        modifiers="row"
        title="Công nghệ"
        content={
          <LogoList
            logos={[
              '/images/logos/logo-php.png',
              '/images/logos/logo-mySQL.png',
              '/images/logos/logo-linux.png',
              '/images/logos/logo-codeigniter.png',
              '/images/logos/logo-amazon.png',
              '/images/logos/logo-redis.png',
              '/images/logos/logo-hmvc.png',
              '/images/logos/logo-bootstrap.png',
              '/images/logos/logo-dwoo.png',
              '/images/logos/logo-jwt.png',
              '/images/logos/logo-jquery.png',
              '/images/logos/logo-html.png',
              '/images/logos/logo-sass.png',
            ]}
          />
        }
      />
    </>
  ),
};
