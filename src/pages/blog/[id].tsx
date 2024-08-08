/* eslint-disable @next/next/no-img-element */
import BlogBanner from 'components/organisms/blog-banner';
import BlogRelated from 'components/organisms/blog-related';
import BlogWrapper from 'components/organisms/blog-wrapper';
import SocialNetworkService from 'components/organisms/social-network-service';
import { General } from 'components/templates/general';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogsService from 'services/BlogsService';
import parse from 'html-react-parser';
import Head from 'next/head';
// import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const BlogDetail = ({ blog }: { blog: any }) => {
  const { t } = useTranslation('blog-detail');
  const related = blog.related_posts?.reduce((result: any, item: any) => {
    return [
      ...result,
      {
        linkUrl: `/blog/${item.id}`,
        publishDate: item.date,
        topic: item.category,
        blogTitle: item.title,
        blogImageSrc: item.image,
      },
    ];
  }, []);
  const { asPath } = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const URL = `${process.env.NEXT_PUBLIC_HOSTNAME}${asPath}`;
  const imageMeta = blog.image ?? `${origin}/images/og_200x200.png`;
  return (
    <>
      <Head>
        <meta name="description" content={`${parse(blog.description_share)}`} />
        <meta property="og:title" content={`${parse(blog.title)} | LAMPART`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageMeta} />
        <meta property="og:url" content={`${URL}`} />
        <meta property="og:description" content={`${parse(blog.description_share)}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content={imageMeta} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <General className="p-blog-detail" pageTitle={`${parse(blog?.title || 'BLOG')} | LAMPART`} noStickyChat>
        {/* BLOG DETAIL HERO SECTION */}
        {/* {(blog.image || blog.cate_img) && (
          <BlogBanner leftBgSrc="/images/bg-left-blog-banner.jpg" imageSrc={blog.image ?? blog.cate_img} />
        )} */}
        <SocialNetworkService blogId={blog.id} />
        {/* BLOG CONTENT*/}
        <section className="p-blog-detail__content">
          <BlogWrapper
            bgTitle="BLOG"
            title={parse(blog.title)}
            date={blog.date}
            category={blog.category[0].name || ''}
            like={blog.like_count}
            prevUrl={blog.prev_post ? `/blog/${blog.prev_post}` : ''}
            nextUrl={blog.next_post ? `/blog/${blog.next_post}` : ''}
          >
            <p className="o-message__name">{blog.name_author}</p>
            {parse(blog.content)}
          </BlogWrapper>
          {/* BLOG RELATED SECTION */}
          {related && related.length > 0 && (
            // <BlogRelated bgTitle="OTHERS" title={t('blog-related')} blogList={related} />
            <BlogRelated bgTitle="OTHERS" title="BLOG LIÊN QUAN KHÁC" blogList={related} />
          )}
        </section>
      </General>
    </>
  );
  // return <>test</>;
};

export const getServerSideProps = async ({ locale, query }: { locale: string; query: any }) => {
  let result = null;
  if (query.preview === 'true') {
    result = await BlogsService.getBlogPreview(query.id);
  } else {
    result = await BlogsService.getBlog(query.id);
  }

  // if (result.success && !result.data.id) {
  if (result.success && result.data === null) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: result.data,
      ...(await serverSideTranslations(locale, ['common', 'blog-detail'])),
    },
  };
};

export default BlogDetail;
