import Button from 'components/atoms/button';

import Text from 'components/atoms/text';
import Title from 'components/atoms/title';
import Career from 'components/organisms/career';
import Container from 'components/organisms/container';
import JobDetail from 'components/organisms/job-detail';
import JobHero from 'components/organisms/job-hero';
import JobList from 'components/organisms/job-list';
import { General } from 'components/templates/general';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import JobService from 'services/JobService';

const Job = (data: any) => {
  const { t } = useTranslation(['job', 'common']);
  const getJobs = (jobs: any, isRecruiting: boolean) => {
    const jobs_array = jobs.reduce((result: any, j: any) => {
      if (j.is_recruiting === isRecruiting) {
        const job = {
          name: j.position,
          description: j.job_description,
          required_skill: j.required_skill,
          advanced_skill: j.advanced_skill,
          benefit: j.benefit,
          url: j.url,
          is_recruiting: j.is_recruiting,
          onClick: (e?: React.MouseEvent<HTMLElement>) => {
            e?.preventDefault();
            Router.push(j.url);
          },
        };
        return [...result, job];
      }
      return [...result];
    }, []);
    if (jobs_array.length > 0) {
      jobs_array[0].isActive = true;
    }

    return jobs_array;
  };

  const [openedJobs] = useState(getJobs(data.job, true));
  const [closedJobs] = useState(getJobs(data.job, false));
  const [activeButton, setActiveButton] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(openedJobs[0]);

  const router = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const URL = `${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`;
  useEffect(() => {
    const tabs = document.querySelectorAll('.m-tabs__tab-title');
    tabs?.forEach((item, idx) => {
      item?.addEventListener('click', () => {
        if (idx === 1) {
          setActiveButton(!activeButton);
          // setSelectedJob(closedJobs[0]);
        } else {
          setActiveButton(activeButton);
          // setSelectedJob(openedJobs[0]);
        }
      });
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content={`${data.job[0].description_share.replace('<br>', ' ')}`} />
        <meta property="og:title" content="JOB | LAMPART" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
        <meta property="og:url" content={`${URL}`} />
        <meta property="og:description" content={`${data.job[0].description_share.replace('<br>', ' ')}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
      </Head>
      <General
        className="p-job"
        pageTitle="JOB | LAMPART"
        isModal={isOpenModal}
        onClickModal={() => setOpenModal(false)}
      >
        {/* JOB HERO SECTION */}
        <JobHero
          // title={t('hero.title')}
          title="TUYỂN DỤNG"
          leftBg="/images/jobs-bg.jpg"
          image="/images/jobs-image.jpg"
        />

        {/* JOB BODY*/}
        <section className="p-job__body">
          {/* JOB LIST SECTION */}
          <JobList
            className="a-animated-fadeinup a-animated-block"
            openedJobs={{
              // title: t('job-list.job-open-title'),
              title: 'JOB ĐANG TUYỂN',
              jobs: openedJobs,
              content: (
                <Text modifiers={['border-highlight', 'fz-medium']}>
                  {/* {t('job-list.highlight')} */}
                  Chúng tôi luôn mong muốn có cơ hội hợp tác với các bạn. Nếu không tìm được vị trí của mình, bạn có thể
                  nộp hồ sơ vào công ty chúng tôi, chúng tôi luôn chào đón bạn.
                  {router.locale === 'vi' && (
                    <Button
                      inlineLink
                      onClick={() => setOpenModal(true)}
                      // linkText={t('job-list.link')}
                      linkText=" Ứng tuyển với vị trí khác"
                      noIcon
                    />
                  )}
                </Text>
              ),
              active: true,
            }}
            closedJobs={{
              // title: t('job-list.job-close-title'),
              title: 'JOB ĐÃ ĐÓNG',
              jobs: closedJobs,
              content: (
                <Text modifiers={['border-highlight', 'fz-medium']}>
                  {/* {t('job-list.highlight')} */}
                  Chúng tôi luôn mong muốn có cơ hội hợp tác với các bạn. Nếu không tìm được vị trí của mình, bạn có thể
                  nộp hồ sơ vào công ty chúng tôi, chúng tôi luôn chào đón bạn.
                  {router.locale === 'vi' && (
                    <Button
                      inlineLink
                      onClick={() => setOpenModal(true)}
                      // linkText={t('job-list.link')}
                      linkText=" Ứng tuyển với vị trí khác"
                      noIcon
                    />
                  )}
                </Text>
              ),
              active: false,
            }}
          />
          {/*JOB INFO SECTION */}
          <section className="p-job__job-info">
            <Container modifiers="medium">
              <div className="a-animated-fadeinup a-animated-block">
                <Title className="p-job__job-title">{}</Title>
              </div>
              {/* STORY SECTION */}
              {/* <div className="a-animated-fadeinup a-animated-block">
              <Story
                intro={
                  <>
                    {t('info.intro.line01')}
                    <br />
                    {t('info.intro.line02')}
                  </>
                }
                linkText={t('info.project-link')}
                linkUrl="/service#project-in-charge"
                title={t('info.title')}
                content={
                  <>
                    {t('info.content.01')}
                    <br />
                    {t('info.content.02')}
                    <br />
                    {t('info.content.03')}
                    <br />
                    {t('info.content.04')}
                    <br />
                    {t('info.content.05')}
                    <br />
                    {t('info.content.06')}
                  </>
                }
              />
            </div> */}
              {/* CAREER SECTION */}
              <div className="a-animated-fadeinup a-animated-block">
                <Career
                  title={t('career.title')}
                  careerStage={[
                    {
                      jobTitle: [
                        <>
                          Intern <br className="u-dn-sp" />
                          <span className="u-dn-pc">/</span>
                          Fresher
                        </>,
                      ],
                      status: '0',
                    },
                    {
                      jobTitle: [
                        'Junior',
                        'Middle',
                        <>
                          Senior
                          <br />
                          Specialist
                        </>,
                      ],
                      status: '0',
                    },
                    {
                      jobTitle: [
                        <>
                          Expert
                          <br />
                          (Technical)
                        </>,
                        <>
                          Sub-Leader
                          <br />
                          (Human)
                        </>,
                      ],
                      status: '1',
                    },
                    {
                      jobTitle: [
                        'Leader ',
                        <>
                          Senior <br className="u-dn-sp" />
                          Leader
                        </>,
                      ],
                      status: '0',
                    },
                    { jobTitle: ['Manager'], status: '0' },
                  ]}
                />
              </div>
              <div className="a-animated-fadeinup a-animated-block">
                <JobDetail
                  isDisableButton={!selectedJob.is_recruiting}
                  jobTitle={selectedJob.name}
                  workModelList={['Hybrid', 'Fulltime']}
                  tabs={[
                    {
                      // title: t('job-description.description.title'),
                      title: 'Mô tả công việc',
                      content: selectedJob.description,
                    },
                    {
                      // title: t('job-description.required-skills.title'),
                      title: 'Kỹ năng yêu cầu',
                      content: selectedJob.required_skill,
                    },
                    {
                      // title: t('job-description.advantage-skills.title'),
                      title: 'Lợi thế',
                      content: selectedJob.advanced_skill,
                    },
                    {
                      // title: t('job-description.benefit.title'),
                      title: 'Quyền lợi',
                      content: selectedJob.benefit,
                    },
                  ]}
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </Container>
          </section>
        </section>
      </General>
    </>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => {
  const result = await JobService.getJobs();

  if (result.success && result.data.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      job: result.data,
      ...(await serverSideTranslations(locale, ['common', 'job'])),
    },
  };
};

export default Job;
