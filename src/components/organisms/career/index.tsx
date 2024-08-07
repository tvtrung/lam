import Title from 'components/atoms/title';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';

type CareerStage = {
  status: string;
  jobTitle: React.ReactNode[];
};
interface CareerStageProps {
  className?: string;
  careerStage: CareerStage;
}

const CareerStage: React.FC<CareerStageProps> = ({ className: addClass, careerStage }) => {
  const className = mapModifiers('o-career__stage');
  const classNames = mapClassnames(className, addClass, careerStage.status === '1' && 'o-career__stage--equal');
  return (
    <ul className={classNames}>
      {careerStage.jobTitle.map((jobTitle, idx) => (
        <li className="o-career__job-title" key={`career-job-title-${idx}`}>
          {jobTitle}
        </li>
      ))}
    </ul>
  );
};

interface CareerProps {
  className?: string;
  title: string;
  careerStage: CareerStage[];
}

const Career: React.FC<CareerProps> = ({ className: addClass, title, careerStage }) => {
  const className = mapModifiers('o-career');
  const classNames = mapClassnames(className, addClass);
  return (
    <section className={classNames}>
      <Container className="o-career__container">
        <Title className="o-career__title" modifiers="green" tag="h3">
          {title}
        </Title>
        <div className="o-career__path">
          {careerStage.map((careerStage, idx) => (
            <CareerStage
              careerStage={careerStage}
              className="a-animated-block a-animated-fadeinleft"
              key={`career-stage-${idx}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Career;
