import Button from 'components/atoms/button';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
import { useIsSp } from 'utils/hooks';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

interface JobDetailTabItemProps {
  title: string;
  content: React.ReactNode;
}

interface JobDetailTabsProps {
  className?: string;
  tabs: JobDetailTabItemProps[];
}

const JobDetailTabs: React.FC<JobDetailTabsProps> = ({ className: addClass, tabs }) => {
  const className = mapModifiers('o-job-detail__tabs');
  const classNames = mapClassnames(className, addClass);
  const [tabActive, setTabActive] = useState(0);
  const elRefs = useRef<HTMLLIElement[]>([]);

  const isSp = useIsSp();

  useEffect(() => {
    if (isSp) {
      elRefs.current[tabActive].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [tabActive]);

  return (
    <div className={classNames}>
      <ul className="o-job-detail__tab-list">
        {tabs.map(({ title, content }, idx) => (
          <li
            key={`job-detail-${idx}`}
            ref={el => {
              if (el) elRefs.current[idx] = el;
            }}
            className={mapClassnames('o-job-detail__tab-item', idx === tabActive && 'o-job-detail__tab-item--active')}
            onClick={() => {
              setTabActive(idx);
            }}
          >
            <div className="o-job-detail__tab-title">{title}</div>
            {isSp && (
              <div
                className={mapClassnames(
                  'o-job-detail__tab-content',
                  idx === tabActive && 'o-job-detail__tab-content--active'
                )}
              >
                {parse(content as string)}
              </div>
            )}
          </li>
        ))}
      </ul>
      {!isSp && (
        <div className="o-job-detail__tab-content-list">
          {tabs.map(({ content }, idx) => (
            <div
              key={`tab-content-${idx}`}
              className={mapClassnames(
                'o-job-detail__tab-content',
                idx === tabActive && 'o-job-detail__tab-content--active'
              )}
            >
              {parse(content as string)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

interface JobDetailProps {
  className?: string;
  jobTitle: string;
  workModelList: string[];
  tabs: JobDetailTabItemProps[];
  isDisableButton: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}
const JobDetail: React.FC<JobDetailProps> = ({
  className: addClass,
  jobTitle,
  workModelList,
  tabs,
  isDisableButton = false,
  onClick,
}) => {
  const className = mapModifiers('o-job-detail');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation('job');
  const router = useRouter();
  return (
    <section className={classNames}>
      <Container modifiers="medium" className="o-job-detail__container">
        <Title className="o-job-detail__job-title" tag="h3">
          {parse(jobTitle)}
        </Title>
        <ul className="o-job-detail__work-model-list">
          {workModelList?.map((workModel, idx) => (
            <li key={`work-model-${idx}`} className="o-job-detail__work-model">
              {workModel}
            </li>
          ))}
        </ul>
        <JobDetailTabs tabs={tabs} />
        <div className="o-job-detail__highlight">
          <Title className="o-job-detail__hiring" modifiers="green" tag="h4">
            {/* {t('job-description.hiring')} */}
            Bạn đã sẵn sàng?
          </Title>
          {router.locale === 'vi' && (
            <Button
              className={mapClassnames(
                'o-job-detail__hiring-button',
                isDisableButton && 'o-job-detail__hiring-button--disabled'
              )}
              linkText={t('job-description.recruitment')}
              noIcon
              modifiers="fill"
              onClick={e => onClick && onClick(e)}
            />
          )}
        </div>
      </Container>
    </section>
  );
};

export default JobDetail;
