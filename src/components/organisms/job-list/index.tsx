import Button from 'components/atoms/button';
import JobTitle from 'components/atoms/job-title';
import Tabs from 'components/molecules/tabs';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

interface JobProps {
  title: string;
  jobs: { name: string; isActive?: boolean; onClick?: (e?: React.MouseEvent<HTMLElement>) => void }[];
  content?: React.ReactNode;
  onClickReadMore?: (e?: React.MouseEvent<HTMLElement>) => void;
  active?: boolean;
}

interface JobListProps {
  className?: string;
  openedJobs: JobProps;
  closedJobs: JobProps;
}

const JobList: React.FC<JobListProps> = ({ className: addClass, openedJobs, closedJobs }) => {
  const [showMore, setShowMore] = useState(false);
  const [limitJobDisplay, setLimitJobDisplay] = useState(12);
  const limitItemJob = 12;
  const className = mapModifiers('o-job-list');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();

  return (
    <div className={classNames}>
      <Tabs
        className="o-job-list__tabs"
        tabs={[
          {
            title: openedJobs.title,
            content: (
              <>
                <div className="o-job-list__grid-jobs">
                  {openedJobs.jobs.slice(0, limitJobDisplay).map(({ name, isActive, onClick }, idx) => (
                    <JobTitle
                      key={`open-job-title-${idx}`}
                      className="o-job-list__grid-item"
                      modifiers={isActive ? ['selectable', 'active'] : 'selectable'}
                      title={name}
                      onClick={onClick}
                    />
                  ))}
                </div>
                {openedJobs.jobs.length > limitItemJob && (
                  <div className="o-job-list__wrap-button">
                    <Button
                      className={showMore ? 'o-job-list__show-less' : 'o-job-list__show-more'}
                      linkText={t(showMore ? 'show-less' : 'see-more')}
                      modifiers="arrow-down"
                      onClick={e => {
                        setShowMore(!showMore);
                        limitJobDisplay === limitItemJob
                          ? setLimitJobDisplay(openedJobs.jobs.length)
                          : setLimitJobDisplay(limitItemJob);
                        openedJobs.onClickReadMore && openedJobs.onClickReadMore(e);
                      }}
                    />
                  </div>
                )}
                {openedJobs.content && <div className="o-job-list__job-content">{openedJobs.content}</div>}
              </>
            ),
            onCLick: () => {
              setShowMore(false);
              setLimitJobDisplay(limitItemJob);
            },
            active: openedJobs.active,
          },

          {
            title: closedJobs.title,
            isClosedJob: true,
            content: (
              <>
                <div className="o-job-list__grid-jobs">
                  {closedJobs.jobs.slice(0, limitJobDisplay).map(({ name, isActive, onClick }, idx) => (
                    <JobTitle
                      key={`close-job-title-${idx}`}
                      className="o-job-list__grid-item"
                      modifiers={isActive ? ['selectable', 'active'] : 'selectable'}
                      title={name}
                      onClick={onClick}
                    />
                  ))}
                </div>
                {closedJobs.jobs.length > limitItemJob && (
                  <div className="o-job-list__wrap-button">
                    <Button
                      className={showMore ? 'o-job-list__show-less' : 'o-job-list__show-more'}
                      linkText={t(showMore ? 'show-less' : 'view-detail')}
                      modifiers="arrow-down"
                      onClick={e => {
                        setShowMore(!showMore);
                        limitJobDisplay === limitItemJob
                          ? setLimitJobDisplay(closedJobs.jobs.length)
                          : setLimitJobDisplay(limitItemJob);
                        closedJobs.onClickReadMore && closedJobs.onClickReadMore(e);
                      }}
                    />
                  </div>
                )}
                {closedJobs.content && <div className="o-job-list__job-content">{closedJobs.content}</div>}
              </>
            ),
            onCLick: () => {
              setShowMore(false);
              setLimitJobDisplay(limitItemJob);
            },
            active: closedJobs.active,
          },
        ]}
      />
    </div>
  );
};

export default JobList;
