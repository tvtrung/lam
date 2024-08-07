import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';

interface JobTitleProps {
  className?: string;
  title: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  modifiers?: ModifierProp<'selectable' | 'active'>;
}

const JobTitle: React.FC<JobTitleProps> = ({ className: addClass, title, onClick, modifiers }) => {
  const className = mapModifiers('a-job-title', modifiers);
  const classNames = mapClassnames(className, addClass);
  const router = useRouter();
  return (
    <span className={router.locale === 'vi' ? classNames + '__vi' : classNames} onClick={e => onClick && onClick(e)}>
      {parse(title)}
    </span>
  );
};

export default JobTitle;
