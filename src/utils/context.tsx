import { createContext, useContext, useState } from 'react';
import httpaxios from 'services/HeaderService';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
type ContextType = {
  options: any;
};

const AppContext = createContext<ContextType | null>(null);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [options, setOptions] = useState('');
  const router = useRouter();
  useEffect(() => {
    if (router.locale) {
      const getOptions = httpaxios.getOptions(router.locale);
      Promise.all([getOptions])
        .then(values => {
          if (values[0] && values[0].success) {
            setOptions(values[0].data);
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  }, [router.locale]);

  return (
    <AppContext.Provider
      value={{
        options,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
