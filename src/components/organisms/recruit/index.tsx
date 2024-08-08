import Button from 'components/atoms/button';
import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';

interface Job {
  url: string;
  position: string;
}
interface RecruitProps {
  className?: string;
  title?: string;
  jobs: Job[];
  linkUrl: string;
  id?: string;
}

const Recruit: React.FC<RecruitProps> = ({ className: addClass, id, title, jobs, linkUrl }) => {
  const className = mapModifiers('o-recruit');
  const classNames = mapClassnames(className, addClass);
  const { t } = useTranslation();

  return (
    <section className={classNames}>
      <span className="o-recruit__id" id={id} />
      <Container>
        <div className="o-recruit__body">
          {title && (
            <Title className="o-recruit__title a-animated-block a-animated-fadeinup" modifiers="inverse">
              <span>{title}</span>
            </Title>
          )}
          <ul className="o-recruit__list a-animated-block a-animated-fadeinup">
            {jobs.map((item, index) => (
              <li key={index} className="o-recruit__item">
                <Link href={item.url}>
                  <a className="o-recruit__button">{parse(item.position)}</a>
                </Link>
              </li>
            ))}
          </ul>
          <Button
            className="o-recruit__viewmore a-animated-block a-animated-fadeinup"
            linkText={t('view-detail')}
            linkUrl={linkUrl}
          />
        </div>
      </Container>
    </section>
  );
};

export default Recruit;
