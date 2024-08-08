import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';
import Link from 'next/link';

interface Props {
  className?: string;
  linkText: string;
  linkUrl?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  noIcon?: boolean;
  modifiers?: ModifierProp<'arrow-down' | 'fill' | 'green' | 'arrow-left' | 'black'>;
  isNative?: boolean;
  isReverse?: boolean;
  inlineLink?: boolean;
  isBlank?: boolean;
}

const Button: React.FC<Props> = ({
  className: addClass,
  linkText,
  linkUrl,
  onClick,
  noIcon,
  modifiers,
  isNative,
  isReverse,
  inlineLink,
  isBlank,
}) => {
  const className = mapModifiers('a-button', modifiers, inlineLink && 'link');
  const classNames = mapClassnames(className, addClass);

  if (linkUrl) {
    if (isNative) {
      return (
        <a href={linkUrl} className={classNames} onClick={e => onClick && onClick(e)}>
          {isReverse && <span className="a-button__icon" />}
          {linkText}
          {!isReverse && !noIcon && <span className="a-button__icon" />}
        </a>
      );
    }

    return (
      <Link href={linkUrl}>
        <a className={classNames} target={isBlank ? '_blank' : '_self'}>
          {isReverse && <span className="a-button__icon" />}
          {linkText}
          {!isReverse && !noIcon && <span className="a-button__icon" />}
        </a>
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={e => onClick && onClick(e)}>
      {isReverse && <span className="a-button__icon" />}
      {linkText}
      {!isReverse && !noIcon && <span className="a-button__icon" />}
    </button>
  );
};

export default Button;
