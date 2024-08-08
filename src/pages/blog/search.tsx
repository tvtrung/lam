import SearchForm from 'components/atoms/search-form';
import CategoryList from 'components/molecules/category-list';
import BlogHero from 'components/organisms/blog-hero';
import Container from 'components/organisms/container';
import Social from 'components/organisms/social';
import { General } from 'components/templates/general';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BlogsService from 'services/BlogsService';
import { BLOG_PAGE, BLOG_LIMIT } from 'consts/common';

const Blog = () => {
  const { t } = useTranslation('blog');
  const router = useRouter();
  const { q } = router.query;
  const [categories, setCategories] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    BlogsService.getCategories(BLOG_PAGE, BLOG_LIMIT).then((res: any) => {
      if (res.success) {
        setCategories(res.data.data);
        setTotalPosts(res.data.total);
      }
    });
  }, []);

  useEffect(() => {
    (function () {
      // const cx = '46dd3e382b1654b0e';
      // const gcse = document.createElement('script');
      // gcse.type = 'text/javascript';
      // gcse.async = true;
      // gcse.src = `https://cse.google.com/cse.js?cx=${cx}`;
      // const s = document.getElementsByTagName('script')[0];
      // s.parentNode?.insertBefore(gcse, s);
    })();

    // console.log('useEffect search');
    if (typeof window !== 'undefined') {
      const inputSearch = document.querySelector('.gsc-search-box-tools input[class="gsc-input"]') as HTMLInputElement;
      if (inputSearch) {
        inputSearch.value = (q as string) || '';
      }

      const buttonSearch = document.querySelector(
        '.gsc-search-box-tools button.gsc-search-button-v2'
      ) as HTMLInputElement;
      if (buttonSearch) {
        buttonSearch.click();
      }
    }
  }, [q]);

  return (
    <General className="p-blog" pageTitle="SEARCH BLOG | LAMPART">
      {/* ABOUT HERO SECTION */}
      <BlogHero title={t('search-result')} bgImage="/images/blog-hero-bg.jpg" image="/images/blog-hero-img.png" />

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
                  },
                ];
              },
              [
                {
                  icon: 'document',
                  label: t('category.01'),
                  amount: totalPosts,
                  linkCat: '/blog',
                  active: true,
                },
              ]
            )}
          />
        </aside>

        <div className="p-blog__body">
          <div className="gcse-search"></div>
        </div>
      </Container>
    </General>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog'])),
    },
  };
};

export default Blog;
