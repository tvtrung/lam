import Title from 'components/atoms/title';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import parse from 'html-react-parser';

interface FormProps {
  className?: string;
  title?: React.ReactNode;
  introText?: string;
  annotationLabel: string;
  annotationText: string;
  termText: string;
  errorTerm: string;
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({
  className: addClass,
  title,
  introText,
  annotationLabel,
  annotationText,
  termText,
  errorTerm,
  onClose,
}) => {
  const className = mapModifiers('o-form');
  const classNames = mapClassnames(className, addClass);
  const [selectedTerm, setSelectedTerm] = useState(false);
  const { t } = useTranslation();
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = async (data: any) => {
    if (!selectedTerm) {
      alert(errorTerm); // eslint-disable-line no-alert
      return;
    }
    setSelectedTerm(false);
    setIsSubmit(false);
    onClose();
    window.open(
      'https://docs.google.com/forms/d/1V0HqhmiS6KS-GlJfKUGSg6lDANiNi0oQk1HP20IcYZA/viewform?fbclid=IwAR0wlRySh9zLiOhfuTmrVb6qn6WLvOYgFQ4MiXRJhdJQhtQIVPPlb2SkPGs&edit_requested=true',
      '_blank',
      'noreferrer'
    );
    return;
  };

  const handleSelectTerm = () => {
    setSelectedTerm(!selectedTerm);
    setIsSubmit(!isSubmit);
  };

  return (
    <section className={classNames}>
      {title && <Title className="o-form__title a-animated-fadeinup a-animated-block">{title}</Title>}
      {introText && <p className="o-form__intro a-animated-fadeinup a-animated-block">{parse(introText)}</p>}
      <form className="o-form__body" onSubmit={onSubmit}>
        <div
          style={{ marginTop: '20px' }}
          className="o-form__group o-form__group--annotation a-animated-fadeinup a-animated-block"
        >
          <p className="o-form__annotation-label">{annotationLabel}</p>
          <p className="o-form__annotation-text">{annotationText}</p>
        </div>
        <div className="o-form__group o-form__group--checkbox a-animated-fadeinup a-animated-block">
          <input
            className="o-form__checkbox"
            type="checkbox"
            id="checkbox-term"
            checked={selectedTerm}
            onChange={handleSelectTerm}
          />
          <label htmlFor="checkbox-term">{termText}</label>
        </div>
        <button className="o-form__button a-animated-fadeinup a-animated-block" type="submit" disabled={!isSubmit}>
          {t('recruit')}
        </button>
      </form>
    </section>
  );
};

export default Form;
