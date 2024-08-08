import SearchForm from 'components/atoms/search-form';
import Card from 'components/molecules/card';
import CategoryList from 'components/molecules/category-list';
import CategorySelection from 'components/molecules/category-selection';
import Indicators, { IndicatorItem } from 'components/molecules/indicators';
import BlogHero from 'components/organisms/blog-hero';
import BlogList from 'components/organisms/blog-list';
import Container from 'components/organisms/container';
import Social from 'components/organisms/social';
import { General } from 'components/templates/general';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useEffect } from 'react';
import BlogsService from 'services/BlogsService';
import { BLOG_PAGE, BLOG_LIMIT, BLOG_ACTIVE_TYPE } from 'consts/common';
import parse from 'html-react-parser';
import Head from 'next/dist/shared/lib/head';
import { useRouter } from 'next/router';
import { noticeText } from 'consts/common';

interface BlogItem {
  category: string;
  date: string;
  id: number;
  image: string;
  like_count: number;
  title: string;
  url: string;
  view: number;
  is_new: boolean;
}
interface Blogs {
  data: BlogItem[];
  total: number;
  cate: any;
  cateIcon: any;
  slug: string;
}

const Category: React.FC<Blogs> = ({ data, total, cate, cateIcon, slug }) => {
  const { t } = useTranslation('blog');
  const [blogs, setBlogs] = useState(data || []);
  const [category, setCategory] = useState(cate);
  const [categories, setCategories] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [p, setP] = useState(BLOG_PAGE);
  const [viewMore, setViewMore] = useState(BLOG_PAGE * BLOG_LIMIT < total);
  const [activeType, setActiveType] = useState(BLOG_ACTIVE_TYPE.NEWEST);
  const [isOpenIndicators, setOpenIndicators] = useState(false);
  const router = useRouter();
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';
  const URL = `${process.env.NEXT_PUBLIC_HOSTNAME}${router.asPath}`;
  const descriptionMeta =
    'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test  test test  test test  test test  test test  test test  test test  test test  test test  test test  test test  test test  test test ';
  useEffect(() => {
    BlogsService.getCategories(BLOG_PAGE, BLOG_LIMIT).then((res: any) => {
      if (res.success) {
        setCategories(res.data.data);
        setTotalPosts(res.data.total);
      }
    });
  }, []);

  useEffect(() => {
    BlogsService.getBlogsByCategory(slug, BLOG_ACTIVE_TYPE.NEWEST, BLOG_PAGE, BLOG_LIMIT).then((res: any) => {
      if (res.success) {
        setBlogs(res.data.data);
        setCategory(res.data.category);
        setViewMore(BLOG_PAGE * BLOG_LIMIT < res.data.total);
        setP(BLOG_PAGE);
      }
    });
  }, [slug]);

  const handleViewMore = async () => {
    const nextPage = p + 1;
    const result = await BlogsService.getBlogsByCategory(slug, activeType, nextPage, BLOG_LIMIT);
    const data = result.data || [];
    setBlogs(prevState => [...prevState, ...data.data]);
    setP(nextPage);
    setViewMore(nextPage * BLOG_LIMIT < total);
  };

  const handleChooseType = async (type: string) => {
    if (activeType === type) return;
    setActiveType(type);
    const result = await BlogsService.getBlogsByCategory(slug, type, BLOG_PAGE, BLOG_LIMIT);
    const data = result.data || [];
    setBlogs(data.data);
    setP(BLOG_PAGE);
    setViewMore(BLOG_PAGE * BLOG_LIMIT < data.total);
    setOpenIndicators(false);
  };

  return (
    <>
      <Head>
        <meta name="description" content={`${cate.category_description.replace('<br>', ' ')}`} />
        <meta property="og:title" content={`${parse(cate.name)} | LAMPART`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
        <meta property="og:url" content={URL} />
        <meta property="og:description" content={`${cate.category_description.replace('<br>', ' ')}`} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_HOSTNAME}/images/og_200x200.png`} />
      </Head>
      <General className="p-blog" pageTitle={`${parse(category?.cat_name || 'BLOG')} | LAMPART`}>
        {/* ABOUT HERO SECTION */}
        <BlogHero title={category.cat_name} bgImage="/images/blog-hero-bg.jpg" image="/images/blog-hero-img.png" />

        {/* ABOUT BODY */}
        <Container className="p-blog__container">
          <aside className="p-blog__sidebar">
            {/* SIDEBAR HEADING */}
            <div className="p-blog__sidebar-heading">
              <Social title="FOLLOW US" className="p-blog__social" />
              <SearchForm placeholder={t('search-placeholder')} />
            </div>

            {/* SIDEBAR CATEGORY MENU */}
            <CategoryList
              list={categories.reduce(
                (cates: any, cate: any) => {
                  return [
                    ...cates,
                    {
                      icon: cate.icon ? cate.icon?.split('--')[1] || '' : '',
                      label: cate.name,
                      amount: cate.term_count,
                      linkCat: `/category/${cate.slug}`,
                      active: slug === cate.slug,
                    },
                  ];
                },
                [
                  {
                    icon: 'document',
                    // label: t('category.01'),
                    label: 'Tất cả',
                    amount: totalPosts,
                    linkCat: '/blog',
                    active: false,
                  },
                ]
              )}
            />
          </aside>

          <div className="p-blog__body">
            {router.locale === 'ja' && <div className="jp-alert">{noticeText}</div>}
            {/* INDICATOR */}
            <Indicators isOpen={isOpenIndicators} onClick={() => setOpenIndicators(!isOpenIndicators)}>
              <IndicatorItem
                icon="eye"
                // text={t('indicator.most-viewed-posts')}
                text="Bài viết xem nhiều"
                isActive={activeType === BLOG_ACTIVE_TYPE.MOST_VIEWED}
                onClick={e => {
                  e?.preventDefault();
                  handleChooseType(BLOG_ACTIVE_TYPE.MOST_VIEWED);
                }}
              />
              <IndicatorItem
                icon="time"
                // text={t('indicator.old-posts')}
                text="Bài viết cũ"
                isActive={activeType === BLOG_ACTIVE_TYPE.OLD}
                onClick={e => {
                  e?.preventDefault();
                  handleChooseType(BLOG_ACTIVE_TYPE.OLD);
                }}
              />
              <IndicatorItem
                icon="add"
                // text={t('indicator.favorite-posts')}
                text="Bài viết yêu thích"
                isActive={activeType === BLOG_ACTIVE_TYPE.FAVORITE}
                onClick={e => {
                  e?.preventDefault();
                  handleChooseType(BLOG_ACTIVE_TYPE.FAVORITE);
                }}
              />
            </Indicators>

            {/* ADDITION AREA */}
            <CategorySelection
              className="p-blog__cat"
              title={category?.cat_name || ''}
              icon={cateIcon || ''}
              number={category?.count || 0}
            />

            {/* LIST BLOG RESULT */}
            <BlogList postNumber="8" viewMore={viewMore} className="p-blog__blog-list" onClick={handleViewMore}>
              {blogs.map((item, key) => (
                <Card
                  key={key}
                  className={p === 1 ? `a-animated-block` : ''}
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  category={item.category}
                  linkUrl={`/blog/${item.id}`}
                  modifiers="blog"
                  isNew={item.is_new}
                  viewCount={item.like_count}
                />
              ))}
            </BlogList>
          </div>
        </Container>
      </General>
    </>
  );
};

export const getServerSideProps = async ({ locale, params }: { locale: string; params: any }) => {
  const { slug } = params;
  const result = await BlogsService.getBlogsByCategory(slug, BLOG_ACTIVE_TYPE.NEWEST, BLOG_PAGE, BLOG_LIMIT);

  if (result.success && !result.data.category) {
    return {
      notFound: true,
    };
  }

  const data = result.data.data || [];
  const total = result.data.total || 0;
  const cate = result.data.category || {};
  const cateIcon = result.data.cat_icon ? result.data.cat_icon?.split('--')[1] || '' : '';
  return {
    props: {
      data,
      total,
      cate,
      cateIcon,
      slug,
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    },
  };
};

export default Category;
