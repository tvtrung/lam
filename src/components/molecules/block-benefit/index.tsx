import Image from 'components/atoms/image';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useState } from 'react';

export interface BlockBenefitProps {
  className?: string;
  image: string;
  title: string;
  hiddenContent: React.ReactNode;
  modifiers?: 'opened';
}

const BlockBenefit: React.FC<BlockBenefitProps> = ({ className: addClass, hiddenContent, title, image, modifiers }) => {
  const [isOpen, setOpen] = useState(false);
  const className = mapModifiers('m-block-benefit', isOpen ? 'opened' : '' || modifiers);
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <Image
        className="m-block-benefit__image"
        src={image}
        modifiers="filled"
        layout="fill"
        objectFit="scale-down"
        objectPosition="center"
        alt=""
      />
      <h3 className="m-block-benefit__title">{title}</h3>
      <div className="m-block-benefit__hidden-content">
        <div className="m-block-benefit__hidden-text">{hiddenContent}</div>
        <button className="m-block-benefit__button" aria-label='benefit' onClick={() => setOpen(!isOpen)}></button>
      </div>
    </div>
  );
};

export default BlockBenefit;
