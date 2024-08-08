import { General } from 'components/templates/general';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import HomeService from 'services/HomeService';
import parse from 'html-react-parser';
import { useIsSp } from 'utils/hooks';
import dynamic from 'next/dynamic';

const Benefit = dynamic(() => import('components/organisms/benefit'));
const Develop = dynamic(() => import('components/organisms/develop'));
const Message = dynamic(() => import('components/organisms/message'));
const OfficeImage = dynamic(() => import('components/organisms/office-image'));
const Promises = dynamic(() => import('components/organisms/promise'));
const Recruit = dynamic(() => import('components/organisms/recruit'));
const Service = dynamic(() => import('components/organisms/service'));
const TopBlog = dynamic(() => import('components/organisms/top-blog'));
const TopHero = dynamic(() => import('components/organisms/top-hero'));

const Home = (props: any) => {
  const { asPath } = useRouter();
  const isSP = useIsSp();

  const URL = `${process.env.NEXT_PUBLIC_HOSTNAME}${asPath}`;
  const [main_visual] = useState({
    title: props.data.main_visual.title || '',
    main_visual_text_1: props.data.main_visual.main_visual_text_1 || '',
    button_text: props.data.main_visual.button_text || '',
  });
  const [promise] = useState({
    title: props.data.promise.title || '',
    image_1: props.data.promise.image_1 || '',
    image_2: props.data.promise.image_2 || '',
    image_3: props.data.promise.image_3 || '',
    text_1: props.data.promise.text_1 || '',
    text_2: props.data.promise.text_2 || '',
    text_3: props.data.promise.text_3 || '',
  });
  const [develop] = useState({
    title: props.data.develop.title || '',
    info_title_1: props.data.develop.info_title_1 || '',
    info_title_2: props.data.develop.info_title_2 || '',
    info_title_3: props.data.develop.info_title_3 || '',
    info_description_1: props.data.develop.info_description_1 || '',
    info_description_2: props.data.develop.info_description_2 || '',
    info_description_3: props.data.develop.info_description_3 || '',
  });
  const [ceo] = useState({
    ceo_name: props.data.ceo.ceo_name || '',
    title: props.data.ceo.title || '',
    text_ceo: props.data.ceo.text_ceo || '',
    image_ceo: props.data.ceo.image_ceo || '',
    link_url: props.data.ceo.link_url || '',
    link_target: props.data.ceo.link_target || '',
    button_text: props.data.ceo.button_text || '',
  });
  const [service] = useState({
    title: props.data.service.title || '',
    sub_text: props.data.service.sub_text || '',
    images: props.data.service.images || '',
    link_target: props.data.service.link_target || '',
    button_text: props.data.service.button_text || '',
  });
  const getOfficeImage = (office_images: Array<any>) => {
    if (!office_images) return [];
    const officeImages = office_images.reduce((result: any, oi: any) => {
      const image = {
        src: oi.office_image,
        spsrc: oi.office_image,
      };
      return [...result, image];
    }, []);

    return officeImages;
  };
  const [officeImage] = useState(getOfficeImage(props.data.office_images || []));
  const [recruit] = useState({
    title: props.data.recruit.title || '',
    button_text: props.data.recruit.button_text || '',
  });
  const [blog] = useState(props.data.blog);
  const [job] = useState(props.data.jobs);
  const getBenefit = (benefits: any) => {
    if (!benefits) return [];
    const arrayBenefits = benefits.reduce((result: any, benefit: any) => {
      const objectBenefit = {
        image: benefit.icon_image,
        title: benefit.b_title,
        hiddenContent: benefit.b_detail,
      };
      return [...result, objectBenefit];
    }, []);

    return arrayBenefits;
  };
  const [benefit] = useState(getBenefit(props.data.benefit?.benefit_details || []));
  const router = useRouter();
  const descriptionMeta = `Đưa Châu Á trở thành trung tâm công nghệ thế giới.
    Mang chất lượng Nhật Bản được quốc tế ca ngợi đến Việt Nam.
    Và cùng với Việt Nam mang các dịch vụ ra toàn thế giới.`;
  const scrollToSection = (e?: React.MouseEvent<HTMLElement>) => {
    e?.preventDefault();
    const recruitment = document.querySelector('#job-recruitment');
    if (recruitment) {
      const top = recruitment.getBoundingClientRect().top;
      const startPos = window.pageYOffset;
      const diff = top;

      let startTime: number | null = null;
      let requestId: number;

      const showAnimation = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime || new Date().getTime();
        }

        const elapsedTime = currentTime - startTime;

        // animation duration 500ms
        const percent = Math.min(elapsedTime / 500, 1);
        window.scrollTo(0, startPos + diff * percent);

        if (elapsedTime < 500) {
          requestId = window.requestAnimationFrame(showAnimation);
        } else {
          window.cancelAnimationFrame(requestId);
        }
      };
      requestId = window.requestAnimationFrame(showAnimation);
    }
  };

  return (
    <>
      <Head>
        <meta name="description" content={`${descriptionMeta.replace('<br>', ' ')}`} />
        <meta property="og:title" content="LAMPART" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
        <meta property="og:url" content={`${URL}`} />
        <meta property="og:description" content={`${descriptionMeta.replace('<br>', ' ')}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
      </Head>
      <General className="p-top">
        {/* TOP HERO SECTION */}
        <TopHero
          title={main_visual.title}
          image="/images/kv/kv.webp"
          content={parse(main_visual.main_visual_text_1)}
          linkText={main_visual.button_text}
          linkUrl="#job-recruitment"
          handleClick={e => scrollToSection(e)}
        />

        {/* PROMISE SECTION */}
        <Promises
          className="p-top__promise"
          title={promise.title}
          data={[
            {
              title: parse(promise.text_1),
              icon: promise.image_1,
            },
            {
              title: parse(promise.text_2),
              icon: promise.image_2,
            },
            {
              title: parse(promise.text_3),
              icon: promise.image_3,
            },
          ]}
        />

        {/* DEVELOP SECTION */}
        <Develop
          className="p-top__develop"
          title={develop.title}
          data={[
            {
              image: '/images/grid-info-01.jpg',
              title: parse(develop.info_title_1),
              children: parse(develop.info_description_1),
            },
            {
              modifiers: 'reverse',
              image: '/images/grid-info-02.jpg',
              title: parse(develop.info_title_2),
              children: parse(develop.info_description_2),
            },
            {
              image: '/images/grid-info-03.jpg',
              title: parse(develop.info_title_3),
              children: parse(develop.info_description_3),
            },
          ]}
        />

        {/* CEO MESSAGE SECTION */}
        <Message
          name={ceo.ceo_name}
          title={ceo.title}
          content={<>{ceo.text_ceo}</>}
          image={ceo.image_ceo}
          linkUrl={ceo.link_url}
          isBlank={ceo.link_target}
          button_text={ceo.button_text}
        />

        {/* SERVICE SECTION */}
        <Service
          title={service.title}
          linkUrl="/service"
          logo={service.images || []}
          content={!isSP ? service.sub_text : service.sub_text.replace(/(\r\n|\n|\r)/gm, '')}
          isBlank={service.link_target}
          buttonText={service.button_text}
        />

        {/* OFFICE IMG SECTION */}
        <OfficeImage images={officeImage} />

        {/* BLOG SECTION */}
        {router.locale === 'vi' && <TopBlog title="BLOG" data={blog || []} linkUrl="/blog" />}

        {/* RECRUIT SECTION */}
        {router.locale === 'vi' && <Recruit id="job-recruitment" title={recruit.title} jobs={job} linkUrl="/job" />}

        {/* BENEFIT SECTION */}
        <Benefit title={props.data.benefit.title} benefits={benefit} />
      </General>
    </>
  );
};

export const getServerSideProps = async ({ locale, query }: { locale: string; query: any }) => {
  const result = await HomeService.getHomeData(locale, query.preview);
  const data = result.data;
  if (result.success && result.data === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
    // revalidate: 10,
  };
};

export default Home;
