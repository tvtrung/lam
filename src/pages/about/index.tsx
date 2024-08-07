import Icon from 'components/atoms/icon';
import Text from 'components/atoms/text';
import Map from 'components/atoms/map';
import Title from 'components/atoms/title';
import AboutHero from 'components/organisms/about-hero';
import Achievement from 'components/organisms/achievement';
import CeoMessage from 'components/organisms/ceo-message';
import Container from 'components/organisms/container';
import Mission from 'components/organisms/mission';
import OfficeInfo from 'components/organisms/office-info';
import Policy from 'components/organisms/policy';
import Vision from 'components/organisms/vision';
import { General } from 'components/templates/general';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import AboutService from 'services/AboutService';
import parse from 'html-react-parser';
import { useAppContext } from 'utils/context';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'components/atoms/image';

const About = (data: any) => {
  const { t } = useTranslation('about');
  const { ...contextData } = useAppContext();

  const { asPath } = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

  const URL = `${process.env.NEXT_PUBLIC_HOSTNAME}${asPath}`;

  const getOfficeImage = (office_images: Array<any>) => {
    if (!office_images) return [];
    const officeImages = office_images.reduce((result: any, oi: any) => {
      return [...result, oi.icon_image];
    }, []);
    return officeImages;
  };
  const getOfficeInfo = (office_info: Array<any>) => {
    if (!office_info) return [];
    const oInfos = office_info.reduce((result, oi: any) => {
      const oInfo = oi.info_detail.reduce((r: any, o: any) => {
        const detail = {
          term: o.title,
          value: o.text,
          icon: o.icon_image,
        };
        return [...r, detail];
      }, []);
      return oInfo;
    }, []);
    return oInfos;
  };
  const [hero] = useState({
    title: data.data.hero.title,
    intro_line_1: data.data.hero.intro_line_1,
    intro_line_2: data.data.hero.intro_line_2,
    intro_line_3: data.data.hero.intro_line_3,
    content: data.data.hero.content,
  });
  const [philosophy] = useState({
    title: data.data.philosophy.title || '',
    vision_title: data.data.philosophy.vision_title || '',
    inner_vision_title: data.data.philosophy.inner_vision_title || '',
    vision_content: data.data.philosophy.vision_content || '',
    mission_title: data.data.philosophy.mission_title || '',
    inner_mission_title: data.data.philosophy.inner_mission_title || '',
    mission_content: data.data.philosophy.mission_content || '',
    policy_title: data.data.philosophy.policy_title || '',
    inner_policy_title: data.data.philosophy.inner_policy_title || '',
    policy_content: data.data.philosophy.policy_content || '',
  });
  const [achievement] = useState({
    title: data.data.achievement.title || '',
    card_1_title: data.data.achievement.card_1_title || '',
    card_1_content: data.data.achievement.card_1_content || '',
    card_2_title: data.data.achievement.card_2_title || '',
    card_2_content: data.data.achievement.card_2_content || '',
    card_3_title: data.data.achievement.card_3_title || '',
    card_3_content: data.data.achievement.card_3_content || '',
  });
  const [officeImage] = useState(getOfficeImage(data.data.office_images?.images || []));
  const [officeInfos] = useState(getOfficeInfo(data.data.office_infos?.detail || []));
  const [ceoMessage] = useState({
    message: data.data.ceo_message.message || '',
    target_list_image_1: data.data.ceo_message.target_list_image_1 || '',
    target_list_text_1: data.data.ceo_message.target_list_text_1 || '',
    target_list_image_2: data.data.ceo_message.target_list_image_2 || '',
    target_list_text_2: data.data.ceo_message.target_list_text_2 || '',
    target_list_image_3: data.data.ceo_message.target_list_image_3 || '',
    target_list_text_3: data.data.ceo_message.target_list_text_3 || '',
    target_list_image_4: data.data.ceo_message.target_list_image_4 || '',
    target_list_text_4: data.data.ceo_message.target_list_text_4 || '',
    target_list_image_5: data.data.ceo_message.target_list_image_5 || '',
    target_list_text_5: data.data.ceo_message.target_list_text_5 || '',
    target_list_image_6: data.data.ceo_message.target_list_image_6 || '',
    target_list_text_6: data.data.ceo_message.target_list_text_6 || '',
    ceo_quotes: data.data.ceo_message.ceo_quotes || '',
    ceo_text: data.data.ceo_message.ceo_text || '',
    ceo_text_1: data.data.ceo_message.ceo_text_1 || '',
  });
  const descriptionMeta =
    'Sứ mệnh của Lampart là cung cấp và đem đến dịch vụ thỏa mãn nhu cầu của khách hàng khi sử dụng.';
  useEffect(() => {
    if (window.location.hash === '#ceo-message') {
      document.querySelector('#ceo-message')?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content={`${descriptionMeta.replace('<br>', ' ')}`} />
        <meta property="og:title" content="ABOUT | LAMPART" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
        <meta property="og:url" content={`${URL}`} />
        <meta property="og:description" content={`${descriptionMeta.replace('<br>', ' ')}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
      </Head>
      <General className="p-about" pageTitle="ABOUT | LAMPART">
        {/* ABOUT HERO SECTION */}
        <AboutHero
          innerTitle={hero.title}
          bgTitle="THINKING"
          intro={
            <>
              <span className="a-bgslide-text a-animated-block a-delay-animated-2">
                <span>
                  {parse(hero.intro_line_1)}
                  <em className="a-bgslide-text a-animated-block a-bgslide-text--green a-delay-animated-2">
                    <span>{parse(hero.intro_line_2)}</span>
                  </em>
                  {hero.intro_line_3}
                </span>
              </span>
            </>
          }
          content={parse(hero.content)}
        />

        {/* PHILOSOPHY */}
        <section className="p-about__philosophy">
          <Container modifiers="medium" className="p-about__philosophy-title">
            <Title className="a-animated-fadeinup a-animated-block">{philosophy.title}</Title>
          </Container>

          {/* VISION SECTION */}
          <Vision
            title={philosophy.vision_title}
            innerTitle={parse(philosophy.inner_vision_title)}
            titleBg="philosophy"
            image="/images/stock-photo-ho-chi-minh-vietnam-dec-royalty.jpg"
            number="01"
          >
            {parse(philosophy.vision_content)}
          </Vision>

          {/* MISSION SECTION */}
          <Mission
            title={philosophy.mission_title}
            highlightText={philosophy.inner_mission_title}
            content={parse(philosophy.mission_content)}
            image="/images/mission-img-dummy.jpg"
            number="02"
          />

          {/* POLICY SECTION */}
          <Policy
            className="p-about__policy"
            title={philosophy.policy_title}
            innerTitle={parse(philosophy.inner_policy_title)}
            image="/images/policy.jpg"
            number="03"
          >
            {parse(philosophy.policy_content)}
          </Policy>
        </section>

        {/* ACHIEVEMENT SECTION */}
        <Achievement
          title={achievement.title}
          listCard={[
            {
              image: '/images/card-info-img-01.jpg',
              title: parse(achievement.card_1_title),
              content: parse(achievement.card_1_content),
              number: '01',
              onClick: e => {
                e?.preventDefault();
                const cardInfo = e?.currentTarget.closest('.m-card-info');
                cardInfo?.classList.add('m-card-info--showmore');
              },
            },
            {
              image: '/images/card-info-img-02.jpg',
              title: parse(achievement.card_2_title),
              content: parse(achievement.card_2_content),
              number: '02',
              onClick: e => {
                e?.preventDefault();
                const cardInfo = e?.currentTarget.closest('.m-card-info');
                cardInfo?.classList.add('m-card-info--showmore');
              },
            },
            {
              image: '/images/card-info-img-03.jpg',
              title: achievement.card_3_title,
              content: achievement.card_3_content,
              number: '03',
              onClick: e => {
                e?.preventDefault();
                const cardInfo = e?.currentTarget.closest('.m-card-info');
                cardInfo?.classList.add('m-card-info--showmore');
              },
            },
          ]}
        />

        {/* ANCHOR CEO MESSAGE */}
        <span id="ceo-message"></span>
        {/* CEO MESSAGE SECTION */}
        <CeoMessage
          title={t('message.title')}
          label="MESSAGE"
          author={t('message.author')}
          position="CEO"
          image="/images/ceo-halfbody.png"
          imageSP="/images/ceo-halfbody-sp.jpg"
        >
          <div className="a-text">{parse(ceoMessage.message)}</div>
          <ul className="o-ceo-message__list">
            <li className="o-ceo-message__item">
              {ceoMessage.target_list_image_1 && (
                <Image
                  width={72}
                  height={72}
                  objectFit="fill"
                  src={ceoMessage.target_list_image_1}
                  className="o-ceo-message__icon"
                  alt="text 1"
                />
              )}
              {/* <Icon iconName="target" className="o-ceo-message__icon" /> */}
              <Text className='a-text-li' modifiers="bold">{parse(ceoMessage.target_list_text_1)}</Text>
            </li>
            <li className="o-ceo-message__item">
              {ceoMessage.target_list_image_2 && (
                <Image
                  width={72}
                  height={72}
                  objectFit="fill"
                  src={ceoMessage.target_list_image_2}
                  className="o-ceo-message__icon"
                  alt="text 2"
                />
              )}
              {/* <Icon iconName="target" className="o-ceo-message__icon" /> */}
              <Text className='a-text-li' modifiers="bold">{ceoMessage.target_list_text_2}</Text>
            </li>
            <li className="o-ceo-message__item">
              {ceoMessage.target_list_image_3 && (
                <Image
                  width={72}
                  height={72}
                  objectFit="fill"
                  src={ceoMessage.target_list_image_3}
                  className="o-ceo-message__icon"
                  alt="text 3"
                />
              )}
              {/* <Icon iconName="target" className="o-ceo-message__icon" /> */}
              <Text className='a-text-li' modifiers="bold">{parse(ceoMessage.target_list_text_3)}</Text>
            </li>
            <li className="o-ceo-message__item">
              {ceoMessage.target_list_image_4 && (
                <Image
                  width={72}
                  height={72}
                  objectFit="fill"
                  src={ceoMessage.target_list_image_4}
                  className="o-ceo-message__icon"
                  alt="text 4"
                />
              )}
              {/* <Icon iconName="target" className="o-ceo-message__icon" /> */}
              <Text className='a-text-li' modifiers="bold">{parse(ceoMessage.target_list_text_4)}</Text>
            </li>
            <li className="o-ceo-message__item">
              {ceoMessage.target_list_image_5 && (
                <Image
                  width={72}
                  height={72}
                  objectFit="fill"
                  src={ceoMessage.target_list_image_5}
                  className="o-ceo-message__icon"
                  alt="text 5"
                />
              )}
              {/* <Icon iconName="target" className="o-ceo-message__icon" /> */}
              <Text className='a-text-li' modifiers="bold">{parse(ceoMessage.target_list_text_5)}</Text>
            </li>
            <li className="o-ceo-message__item">
              {ceoMessage.target_list_image_6 && (
                <Image
                  width={72}
                  height={72}
                  objectFit="fill"
                  src={ceoMessage.target_list_image_6}
                  className="o-ceo-message__icon"
                  alt="text 6"
                />
              )}
              {/* <Icon iconName="target" className="o-ceo-message__icon" /> */}
              <Text className='a-text-li' modifiers="bold">{parse(ceoMessage.target_list_text_6)}</Text>
            </li>
          </ul>
          <Text>{parse(ceoMessage.ceo_text_1)}</Text>
          {/* <div className="o-ceo-message__quote">{t('message.quote')}</div> */}
          {ceoMessage.ceo_quotes && <div className="o-ceo-message__quote">{ceoMessage.ceo_quotes}</div>}
          {/* <Text>{t('message.text02')}</Text> */}
          <Text>{parse(ceoMessage.ceo_text)}</Text>
        </CeoMessage>

        {/* COMPANY INFO SECTION */}
        <OfficeInfo
          title={t('office.title')}
          dataGallery={officeImage}
          // dataCompany={[
          //   {
          //     term: t('office.name.term'),
          //     value: t('office.name.value'),
          //     icon: 'company',
          //   },
          //   {
          //     term: t('office.foundation.term'),
          //     value: t('office.foundation.value'),
          //     icon: 'calendar',
          //   },
          //   {
          //     term: t('office.headquarters.term'),
          //     value: (
          //       <Text modifiers="green">
          //         <a href="https://wakka-inc.com/" target="_blank">
          //           {t('office.headquarters.value')}
          //         </a>
          //       </Text>
          //     ),
          //     icon: 'headquarters',
          //   },
          //   {
          //     // term: t('office.address.term'),
          //     term: router.locale === 'vi' ? 'VĂN PHÒNG' : '本店',
          //     value: (
          //       <>
          //         {contextData.options?.footer?.footer_address_1 && (
          //           <>
          //             {router.locale !== 'ja' && <b>Trụ sở chính:</b>}
          //             {router.locale !== 'ja' && <br />}
          //             {contextData.options?.footer?.footer_address_1 || ''}
          //             <br />
          //             <br />
          //           </>
          //         )}
          //         {contextData.options?.footer?.footer_address_2 && (
          //           <>
          //             <b>Văn phòng chi nhánh:</b>
          //             <br />
          //             {contextData.options?.footer?.footer_address_2 || ''}
          //           </>
          //         )}
          //       </>
          //     ),
          //     icon: 'map-marker',
          //   },
          //   {
          //     term: t('office.phone.term'),
          //     value: (
          //       <>
          //         {contextData.options?.footer?.footer_phone_1 && (
          //           <>
          //             {contextData.options?.footer?.footer_phone_1 || ''}
          //             <br />
          //           </>
          //         )}
          //         {contextData.options?.footer?.footer_phone_2 || ''}
          //       </>
          //     ),
          //     icon: 'phone',
          //   },
          //   {
          //     term: t('office.fax.term'),
          //     value: contextData.options?.footer?.footer_fax || '',
          //     icon: 'mail',
          //   },
          // ]}
          dataCompany={officeInfos}
        />

        {/* MAP SECTION */}
        <Map
          className="p-about__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.313294022925!2d106.68299341428708!3d10.787299461943862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cb711cefa5%3A0x7eff851bb13e517b!2sC%C3%B4ng%20Ty%20Tnhh%20Lampart!5e0!3m2!1svi!2s!4v1656387002611!5m2!1svi!2s"
        />
      </General>
    </>
  );
};

export const getServerSideProps = async ({ locale, query }: { locale: string; query: any }) => {
  const result = await AboutService.getAboutData(locale, query.preview);
  const data = result.data;
  if (result.success && result.data === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'about'])),
    },
    // revalidate: 10,
  };
};

export default About;
