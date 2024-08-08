/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { mapModifiers } from 'helpers/components';
import anime from 'animejs';

export const TransitionLayout: React.FC = ({ children }) => {
  const router = useRouter();

  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'fade-in' | 'fade-out'>('fade-out');

  useEffect(() => {
    setTransitionStage('fade-in');
  }, []);

  useEffect(() => {
    if (children !== displayChildren) setTransitionStage('fade-out');
  }, [router.asPath]);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // MEMO: ADD ANIME ANIMATION SPIN TEXT
        if (entry.target.className.includes('a-spin-text')) {
          anime
            .timeline()
            .add({
              targets: entry.target,
              opacity: 1,
              duration: 350,
              delay: entry.target.className.includes('a-delay-animated') ? 900 : 0,
            })
            .add({
              targets: entry.target.children,
              rotateY: [-90, 0],
              duration: 1300,
              delay: (_, i) => 45 * i,
            });
        }

        // MEMO: ADD ANIMATED CLASS FOR TEXT BACKGROUND SLIDE
        if (entry.target.className.includes('a-bgslide-text')) {
          entry.target.classList.add('a-bgslide-text--animated');
        }

        // MEMO: ADD ANIMATED CLASS FOR TEXT BACKGROUND SLIDE
        if (entry.target.className.includes('a-bgslide-highlight')) {
          entry.target.classList.add('a-bgslide-highlight--animated');
        }

        // MEMO: ADD ANIMATED CLASS FOR IMAGE BACKGROUND SLIDE
        if (entry.target.className.includes('a-bgslide-img')) {
          entry.target.classList.add('a-bgslide-img--animated');
        }

        // MEMO: ADD ANIMATED CLASS FOR IMAGE BACKGROUND SLIDE
        if (entry.target.className.includes('a-animated-fadeinup')) {
          entry.target.classList.add('a-animated-fadeinup--animated');
        }

        // MEMO: ADD ANIMATED CLASS FOR IMAGE BACKGROUND SLIDE
        if (entry.target.className.includes('a-animated-fadeinleft')) {
          entry.target.classList.add('a-animated-fadeinleft--animated');
        }

        // MEMO: ADD ANIMATED CLASS FOR IMAGE BACKGROUND SLIDE
        if (entry.target.className.includes('a-animated-fadein')) {
          entry.target.classList.add('a-animated-fadein--animated');
        }

        // MEMO: ADD ANIMATED CLASS FOR IMAGE BACKGROUND SLIDE
        if (entry.target.className.includes('o-animated-section')) {
          entry.target.classList.add('o-animated-section--animated');
        }

        observer.unobserve(entry.target);
      }
    });
  }, []);

  const handleTransitionEnd = useCallback(() => {
    if (transitionStage === 'fade-out') {
      setDisplayChildren(children);
      setTimeout(() => {
        setTransitionStage('fade-in');
      }, 650);
    }
  }, [transitionStage]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.35,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Wrap every letter in a span
    const textWrapper = document.querySelectorAll('.a-spin-text');
    Array.from(textWrapper).forEach(function (el) {
      if (el && el.textContent) {
        el.innerHTML = el.textContent.replace(/\S/g, '<span class="a-spin-text__letter">$&</span>');
      }
    });

    const animatedObserver = document.querySelectorAll('.a-animated-block');
    animatedObserver.forEach(i => {
      if (i) {
        observer.observe(i);
      }
    });
  }, [transitionStage]);

  const className = useMemo(() => mapModifiers('t-transition-layout', transitionStage), [transitionStage]);

  return (
    <div className={className} onTransitionEnd={handleTransitionEnd}>
      {displayChildren}
    </div>
  );
};
