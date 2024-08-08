import StickyChat from 'components/atoms/sticky-chat';
import Text from 'components/atoms/text';
import Footer from 'components/organisms/footer';
import Form from 'components/organisms/form';
import Header from 'components/organisms/header';
import Modal from 'components/organisms/modal';
import { mapClassnames } from 'helpers/components';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { useAppContext } from 'utils/context';
import dynamic from 'next/dynamic';

const FacebookMessage = dynamic(() => import('components/organisms/facebook-chat'));

interface GeneralProps {
  className?: string;
  pageTitle?: string;
  isModal?: boolean;
  isModalError?: boolean;
  isFormThankyou?: boolean;
  noStickyChat?: boolean;
  onClickModal?: () => void;
}

export const General: React.FC<GeneralProps> = ({
  className: addClass,
  pageTitle = 'Lampart',
  children,
  isModal,
  isModalError,
  noStickyChat,
  onClickModal,
}) => {
  const classNames = mapClassnames('t-general', addClass);
  const router = useRouter();
  const { locale, pathname, asPath } = router;
  const { t } = useTranslation();
  const [isOpenModal, setOpenModal] = useState(false);
  const [isOpenModalConfirm, setOpenModalConfirm] = useState(false);
  const { ...contextData } = useAppContext();

  const handleModal = (isOpen: boolean) => {
    setOpenModal(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  };

  const handleModalConfirm = (isOpen: boolean) => {
    setOpenModalConfirm(isOpen);
  };

  const redirectLang = () => {
    const itemStorage = 'confirm_' + locale;
    const confirmData = {
      data: true,
      date: new Date().getTime(),
    };
    localStorage.setItem(itemStorage, JSON.stringify(confirmData));
    router.push(asPath, asPath, { locale: locale === 'vi' ? 'ja' : 'vi' });
  };

  const diffDay = (date: string) => {
    const dateCompare = new Date(date.replaceAll('.', '/')).getTime();
    const now = new Date().getTime();
    return now - dateCompare;
  };

  const switchLanguage = useCallback(() => {
    const itemStorage = 'confirm_' + locale;
    const isConfirm = localStorage.getItem(itemStorage);
    if (isConfirm !== null) {
      if (diffDay(JSON.parse(isConfirm).date.toString()) > 14) {
        localStorage.removeItem(itemStorage);
        handleModalConfirm(true);
      } else {
        router.push(asPath, asPath, { locale: locale === 'vi' ? 'ja' : 'vi' });
      }
    } else {
      handleModalConfirm(true);
    }
  }, [locale]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={classNames}>
        <Header
          image={contextData.options?.logo || '/images/logo.svg'}
          menu={
            locale === 'vi'
              ? [
                  { title: t('about'), link: '/about' },
                  { title: t('service'), link: '/service' },
                  { title: t('news'), link: '/blog' },
                  { title: t('job'), link: '/job' },
                ]
              : [
                  { title: t('about'), link: '/about' },
                  { title: t('service'), link: '/service' },
                  { title: t('news'), link: '/blog' },
                  { title: t('job'), link: '/job' },
                ]
          }
          language={locale === 'vi' ? 'JA' : 'VI'}
          recruitButtonText={t('recruit')}
          onClickLanguage={switchLanguage}
          onClickRecruit={() => handleModal(true)}
        />
        <main className="t-general__main">{children}</main>
        {!noStickyChat && <StickyChat />}
        <Footer
          className="t-general__footer"
          address1={contextData.options?.footer?.footer_address_1 || ''}
          address2={contextData.options?.footer?.footer_address_2 || ''}
          email={contextData.options?.footer?.footer_email || ''}
          fax={contextData.options?.footer?.footer_fax || ''}
          phone1={contextData.options?.footer?.footer_phone_1 || ''}
          phone2={contextData.options?.footer?.footer_phone_2 || ''}
        />
        {/* MODAL */}
        <Modal
          open={isOpenModal || isModal}
          onClose={() => {
            handleModal(false);
            onClickModal && onClickModal();
          }}
        >
          <Form
            className="o-modal__form"
            errorTerm={t('form.error-message.term')}
            title={
              <>
                {t('form.title.01')}
                <br />
                {t('form.title.02')}
              </>
            }
            introText={t('form.intro')}
            annotationLabel={t('form.annotation.label')}
            annotationText={t('form.annotation.note')}
            termText={t('form.term')}
            onClose={() => {
              handleModal(false);
              onClickModal && onClickModal();
            }}
          >
            {t('form.contact.text01')}
            <Link href="https://docs.google.com/forms/d/1V0HqhmiS6KS-GlJfKUGSg6lDANiNi0oQk1HP20IcYZA/viewform?fbclid=IwAR0wlRySh9zLiOhfuTmrVb6qn6WLvOYgFQ4MiXRJhdJQhtQIVPPlb2SkPGs&edit_requested=true">
              <a target="_blank">{t('form.contact.link')}</a>
            </Link>
            {t('form.contact.text02')}
            <Text asSpan modifiers={['semi-bold', 'fz-medium']}>
              {t('form.contact.email')}
            </Text>
            {t('form.contact.text03')}
          </Form>
        </Modal>

        {/* MODAL CONFIRM */}
        <Modal
          open={isOpenModalConfirm}
          onClose={() => {
            handleModalConfirm(false);
          }}
        >
          <h1 className="text-center">{t('confirm_title')}</h1>
          <div className="h-20"></div>
          <p className="text-center">{t('confirm_subtitle')}</p>
          <div className="h-50"></div>
          <p className="text-center">
            <button onClick={redirectLang} className="o-header__recruit-button">
              OK
            </button>
          </p>
        </Modal>
      </div>
    </>
  );
};

General.defaultProps = {
  noStickyChat: false,
};
