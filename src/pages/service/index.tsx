import JobTitle from 'components/atoms/job-title';
import Definition from 'components/molecules/definition';
import Company from 'components/organisms/company';
import Diagram from 'components/organisms/diagram';
import HighlightWork, { LogoList } from 'components/organisms/highlight-work';
import Process from 'components/organisms/process';
import ServiceHero from 'components/organisms/service-hero';
import Tech from 'components/organisms/tech';
import { General } from 'components/templates/general';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import releaseIcon from 'lotties/release-icon.json';
import Procedure from 'components/molecules/procedure';
import { useEffect, useState } from 'react';
import ServicesService from 'services/ServicesService';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Service = (props: any) => {
  const { t } = useTranslation('service');
  const getServicesName = (services: any) => {
    const services_array = services.reduce((result: any, s_name: any) => {
      return [...result, s_name.service_name];
    }, []);

    return services_array;
  };
  const [technologies] = useState(props.data.technologies || []);
  const [firstView] = useState({
    title: props.data.first_view.title,
    services: getServicesName(props.data.first_view.services || []),
    text: props.data.first_view.text,
    subtext: props.data.first_view.subtext,
  });
  const [company] = useState({
    title: props.data.parent_company.title || '',
    address: props.data.parent_company.address || '',
    detail: props.data.parent_company.detail || '',
    image: props.data.parent_company.image || '',
    name: props.data.parent_company.name || '',
    url: props.data.parent_company.url || '',
  });
  const [caseStudies] = useState(props.data.casestudies || []);
  const [processes] = useState({
    title: props.data.process.title,
    text: props.data.process.text,
    process_detail_1: props.data.process.process_detail_1,
    process_detail_2: props.data.process.process_detail_2,
    process_detail_3: props.data.process.process_detail_3,
    process_detail_4: props.data.process.process_detail_4,
    process_detail_5: props.data.process.process_detail_5,
    text_release: props.data.process.text_release,
  });
  const router = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const URL = `${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`;
  const descriptionMeta =
    'Lampart đang cung cấp các dịch vụ Tư vấn và lập kế hoạch xây dựng nội dung phát triển phần mềm hệ thống; Phát triển và bảo trì phần mềm; Thiết kế và xây dựng Website cho các quý khách hàng Doanh nghiệp tại Nhật Bản. Đồng thời, chúng tôi cung cấp dịch vụ thành lập công ty và tuyển dụng nguồn nhân lực cho các đối tác Nhật Bản có nhu cầu thành lập công ty tại Việt Nam.';
  useEffect(() => {
    if (window.location.hash === '#project-in-charge') {
      document.querySelector('#project-in-charge')?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content={`${descriptionMeta.replace('<br>', ' ')}`} />
        <meta property="og:title" content="SERVICE | LAMPART" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
        <meta property="og:url" content={URL} />
        <meta property="og:description" content={`${descriptionMeta.replace('<br>', ' ')}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
      </Head>
      <General className="p-service" pageTitle="SERVICE | LAMPART">
        {/* SERVICE HERO SECTION */}
        <ServiceHero
          title={firstView.title}
          leftBg="/images/jobs-bg.jpg"
          image="/images/service-img.jpg"
          data={firstView.services}
          className={firstView.services.length > 3 ? `custom-${firstView.services.length}` : ''}
        >
          {firstView.text}
        </ServiceHero>

        {/* COMPANY SECTION */}
        <Company
          className="p-service__company"
          title={company.title}
          image={company.image}
          innerTitle={company.name}
          link={company.url}
          location={company.address}
          content={<>{company.detail}</>}
        />

        {/* ANCHOR HIGHLIGHT WORK */}
        <span id="project-in-charge"></span>
        {caseStudies.map((caseStudy: any, index: number) => {
          return (
            <HighlightWork key={index} image={caseStudy.casestudy_image} title={<>{caseStudy.casestudy_title}</>}>
              {caseStudy.process && (
                <Definition
                  title={t('highlight.01.development.label')}
                  modifiers="row"
                  content={
                    <Procedure
                      procedure={caseStudy.process.reduce((result: any, proc: any) => {
                        return [
                          ...result,
                          {
                            iconSrc: proc.process_image,
                            content: proc.process_name,
                          },
                        ];
                      }, [])}
                    />
                  }
                />
              )}
              <Definition title={t('highlight.01.system.label')} content={caseStudy.casestudy_system} />
              {caseStudy.casestudy_staff && (
                <Definition
                  title={t('highlight.01.person-in-charge.label')}
                  content={caseStudy.casestudy_staff.map((staff: any, index: number) => {
                    return <JobTitle title={staff.staff_name} key={index} />;
                  })}
                />
              )}
              {caseStudy.casestudy_technologies && (
                <Definition
                  modifiers="row"
                  title={t('highlight.01.tech.label')}
                  content={
                    <LogoList
                      logos={caseStudy.casestudy_technologies.map((image: any) => {
                        return image.logo_image;
                      })}
                    />
                  }
                />
              )}
            </HighlightWork>
          );
        })}

        {/* TECH SECTION */}
        <Tech
          className="p-service__tech"
          title={t('tech.title')}
          image="/images/tech-img-dummy.jpg"
          // techs={[
          //   {
          //     techTitle: 'Lavarel',
          //     techContent: t('tech.laravel'),
          //   },
          //   {
          //     techTitle: 'Vue.js',
          //     techContent: t('tech.vue'),
          //   },
          // ]}
          techs={technologies.map((tech: any) => {
            return {
              techImage: tech.image,
              techTitle: tech.name,
              techContent: tech.detail,
            };
          })}
        />

        {/* PROCESS SECTION */}
        <Process
          className="p-service__process"
          title={processes.title}
          image="/images/process-img.jpg"
          content={processes.text}
        >
          <Diagram
            label={[
              { color: 'green', text: t('diagram.label.01') },
              { color: 'gray', text: t('diagram.label.02') },
            ]}
            releaseImg={releaseIcon}
            releaseTitle={processes.text_release}
            timeline={[
              {
                title: t('diagram.01.title'),
                scope: t('diagram.01.scope'),
                img: '/images/diagram-img01.svg',
                content: processes.process_detail_1,
              },
              {
                highlight: true,
                title: (
                  <>
                    {t('diagram.03.title01')}
                    <br className="u-dn-vi-sp" />
                    {t('diagram.03.title02')}
                    <br className="u-dn-vi-sp" />
                    {t('diagram.03.title03')}
                  </>
                ),
                scope: t('diagram.03.scope'),
                img: '/images/diagram-img03.svg',
                content: processes.process_detail_3,
              },
              {
                title: (
                  <>
                    {t('diagram.05.title01')}
                    <br className="u-dn-vi-sp" />
                    {t('diagram.05.title02')}
                  </>
                ),
                scope: t('diagram.05.scope'),
                img: '/images/diagram-img05.svg',
                content: processes.process_detail_5,
              },
              {
                title: (
                  <>
                    {t('diagram.02.title01')}
                    <br />
                    {t('diagram.02.title02')}
                    <br className="u-dn-sp" />
                    {t('diagram.02.title03')}
                  </>
                ),
                scope: t('diagram.02.scope'),
                img: '/images/diagram-img02.svg',
                content: processes.process_detail_2,
              },
              {
                highlight: true,
                title: (
                  <>
                    {t('diagram.04.title01')}
                    <br className="u-dn-vi-sp" />
                    {t('diagram.04.title02')}
                  </>
                ),
                scope: t('diagram.04.scope'),
                img: '/images/diagram-img04.svg',
                content: processes.process_detail_4,
              },
            ]}
          />
        </Process>
      </General>
    </>
  );
};

export const getServerSideProps = async ({ locale, query }: { locale: string; query: any }) => {
  const result = await ServicesService.getServiceData(locale, query.preview);
  const data = result.data;
  if (result.success && result.data === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'service'])),
    },
    // revalidate: 10,
  };
};

export default Service;
