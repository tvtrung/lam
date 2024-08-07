import { General } from 'components/templates/general';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Custom404 = () => {
  return (
    <General className="p-notfound">
      <div className="p-notfound__content">
        <h1>404</h1>
        <div>This page could not be found.</div>
      </div>
    </General>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    }
  };
};
export default Custom404;
