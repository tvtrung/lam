import { mapClassnames } from 'helpers/components';

interface ScrollTopProps {
  className?: string;
}

const ScrollTop: React.FC<ScrollTopProps> = ({ className: addClass }) => {
  const classNames = mapClassnames('a-scroll-top', addClass);

  const handleClickScrollTop = () => {
    const scrollStep = -window.scrollY / (300 / 15),
      scrollInterval = setInterval(() => {
        window.scrollY !== 0 ? window.scrollBy(0, scrollStep) : clearInterval(scrollInterval);
      }, 15);
  };

  return <span onClick={handleClickScrollTop} className={classNames}></span>;
};

export default ScrollTop;
