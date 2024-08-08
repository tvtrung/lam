import Loading from 'components/atoms/loading';
import { TransitionLayout } from 'components/templates/transition-layout';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'styles/index.scss';
import { AppProvider } from 'utils/context';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    if (history && history.scrollRestoration) history.scrollRestoration = 'manual';

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  return (
    <AppProvider>
      <ParallaxProvider>
        <Loading modifiers={loading ? 'active' : undefined} />
        <TransitionLayout>
          <Component {...pageProps} />
        </TransitionLayout>
      </ParallaxProvider>
    </AppProvider>
  );
};

export default appWithTranslation(MyApp);
