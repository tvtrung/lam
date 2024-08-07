import { mapClassnames, mapModifiers } from 'helpers/components';
import { useEffect, useRef } from 'react';

interface StickyChatProps {
  className?: string;
  onClick?: () => void;
}

const StickyChat: React.FC<StickyChatProps> = ({ className: addClass, onClick }) => {
  const className = mapModifiers('a-sticky-chat');
  const classNames = mapClassnames(className, addClass);
  const currentPos = useRef(0);
  const ref = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    if (!ref.current) return;
    const footer = document.querySelector('.o-footer');

    if (!footer) return;

    const footerHeight = footer.clientHeight - 32;
    const { innerHeight, pageYOffset } = window;
    const { clientHeight } = document.body;
    const distanceFromBottom = clientHeight - (innerHeight + pageYOffset);

    if (distanceFromBottom <= footerHeight) {
      ref.current.style.bottom = `${footerHeight - distanceFromBottom}px`;
      return;
    }

    // ref.current.style.display = 'none';

    if (pageYOffset < 0 || pageYOffset > clientHeight - innerHeight || pageYOffset === currentPos.current) {
      return;
    }

    currentPos.current = pageYOffset;
  };

  useEffect(() => {
    if (ref.current) ref.current.style.display = 'none';
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <button id="sticky-chat-fb" className={classNames} onClick={onClick} ref={ref} />;
};

export default StickyChat;
