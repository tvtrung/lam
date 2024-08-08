import HomeService from 'services/HomeService';

export default function Sitemap() {
  return <></>;
}

export const getServerSideProps = async ({ res } : {res: any}) => {

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>${process.env.NEXT_PUBLIC_HOSTNAME}</loc>
          <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
        </sitemap>
        <sitemap>
          <loc>${process.env.NEXT_PUBLIC_HOSTNAME}/about</loc>
          <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
        </sitemap>
        <sitemap>
          <loc>${process.env.NEXT_PUBLIC_HOSTNAME}/service</loc>
          <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
        </sitemap>
        <sitemap>
          <loc>${process.env.NEXT_PUBLIC_HOSTNAME}/job</loc>
          <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
        </sitemap>
        <sitemap>
          <loc>${process.env.NEXT_PUBLIC_HOSTNAME}/blog</loc>
          <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
        </sitemap>
        ${
          await HomeService.getSiteMap()
          .then((res: any) => {
            let link = '';
            if (res.success) {
              const cates = res.data.categories || [];
              const posts = res.data.posts || [];
              const jobs = res.data.jobs || [];
              cates.map((item: any) => {
                const linkI = `${process.env.NEXT_PUBLIC_HOSTNAME}${item.slug}`;
                link += `<sitemap><loc>${linkI}</loc><lastmod>${item.date}</lastmod></sitemap>`;
                return '';
              });
              posts.map((item: any) => {
                const linkI = `${process.env.NEXT_PUBLIC_HOSTNAME}${item.url}`;
                link += `<sitemap><loc>${linkI}</loc><lastmod>${item.date}</lastmod></sitemap>`;
                return '';
              });
              jobs.map((item: any) => {
                const linkI = `${process.env.NEXT_PUBLIC_HOSTNAME}${item.url}`;
                link += `<sitemap><loc>${linkI}</loc><lastmod>${item.date}</lastmod></sitemap>`;
                return '';
              });
            }
            return `${link}`;
          })
        }
      </sitemapindex>
    `;
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {}
    };
};
