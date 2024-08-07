import Like from 'components/atoms/like';
import Share from 'components/organisms/share';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useEffect, useRef } from 'react';

interface SocialNetworkServiceProps {
  className?: string;
  blogId: string;
}

const SocialNetworkService: React.FC<SocialNetworkServiceProps> = ({ className: addClass, blogId }) => {
  const className = mapModifiers('o-social-network-service');
  const classNames = mapClassnames(className, addClass);
  const currentPos = useRef(0);
  const ref = useRef<HTMLDivElement>(null);

  const url = typeof window !== 'undefined' ? window.location.href : '';

  const handleScroll = () => {
    if (!ref.current) return;
    const blogRelated = document.querySelector('.o-blog-related');
    const footer = document.querySelector('.o-footer');
    const social = document.querySelector('.o-social-network-service');

    if (!footer || !blogRelated || !social) return;

    social.classList.add('o-social-network-service--disable');
    setTimeout(function () {
      social.classList.remove('o-social-network-service--disable');
    }, 2000);

    const footerHeight = footer.clientHeight - 32;
    const blogRelatedHeight = blogRelated.clientHeight;

    const { innerHeight, pageYOffset } = window;
    const { clientHeight } = document.body;
    const distanceFromBottom = clientHeight - (innerHeight + pageYOffset);

    if (distanceFromBottom <= footerHeight + blogRelatedHeight) {
      ref.current.style.bottom = `${footerHeight + blogRelatedHeight - distanceFromBottom}px`;
      return;
    }

    ref.current.removeAttribute('style');

    if (pageYOffset < 0 || pageYOffset > clientHeight - innerHeight || pageYOffset === currentPos.current) {
      return;
    }

    currentPos.current = pageYOffset;
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={classNames} ref={ref}>
      <Share url={url} />
      <Like blogId={blogId}/>
    </div>
  );
};

export default SocialNetworkService;
