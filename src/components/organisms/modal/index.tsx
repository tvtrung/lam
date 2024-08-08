import Icon from 'components/atoms/icon';
import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';

interface ModalProps {
  className?: string;
  open?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ className: addClass, children, open, onClose }) => {
  const className = mapModifiers('o-modal', open && 'opened');
  const classNames = mapClassnames(className, addClass);
  return (
    <div className={classNames}>
      <div className="o-modal__overlay" onClick={onClose} />
      <Container modifiers="medium" className="o-modal__container">
        <button className="o-modal__icon" onClick={onClose}>
          <Icon iconName="close" />
        </button>
        {children}
      </Container>
    </div>
  );
};

export default Modal;
