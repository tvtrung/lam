import Image from 'components/atoms/image';
import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';
import Link from 'next/link';
import parse from 'html-react-parser';

export interface CardProps {
  id?: number;
  className?: string;
  image: string;
  imageSP?: string;
  date: string;
  title: string;
  category?: string;
  linkUrl: string;
  viewCount?: number;
  modifiers?: ModifierProp<'blog'>;
  isNew?: boolean;
}

const Card: React.FC<CardProps> = ({
  className: addClass,
  title,
  image,
  imageSP,
  date,
  category,
  linkUrl,
  viewCount,
  modifiers,
  isNew,
}) => {
  const className = mapModifiers('m-card', modifiers);
  const classNames = mapClassnames(className, addClass);
  return (
    <article className={classNames}>
      {isNew && <span className="m-card__new-indicator" />}
      <Link href={linkUrl}>
        <a>
          <div className="m-card__image">
            {image && (
              <Image
                alt={parse(title) as string}
                src={image}
                spsrc={imageSP}
                modifiers="filled"
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            )}
          </div>
          <div className="m-card__body">
            <div className="m-card__info">
              <span className="m-card__date">{date}</span>
              <span className="m-card__category">{category}</span>
            </div>
            <h3 className="m-card__title">{parse(title)}</h3>
          </div>
        </a>
      </Link>
      {!!viewCount && <span className="m-card__viewcount">{viewCount.toString().padStart(2, '0')}</span>}
    </article>
  );
};

export default Card;
