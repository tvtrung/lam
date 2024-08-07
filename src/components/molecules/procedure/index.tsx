import Image from 'components/atoms/image';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface ProcedureProps {
  className?: string;
  procedure: { iconSrc: string; content: React.ReactNode }[];
}
const Procedure: React.FC<ProcedureProps> = ({ className: addClass, procedure }) => {
  const className = mapModifiers('m-procedure');
  const classNames = mapClassnames(className, addClass);
  return (
    <ul className={classNames}>
      {procedure.map(({ iconSrc, content }, idx) => (
        <li className="m-procedure__item" key={idx}>
          {iconSrc &&
          <Image
            className="m-procedure__image"
            src={iconSrc}
            modifiers="filled"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt=""
          />
          }
          <div className="m-procedure__content">{content}</div>
        </li>
      ))}
    </ul>
  );
};

export default Procedure;
