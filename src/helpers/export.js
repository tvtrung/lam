/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const replace = require('replace');
const fs = require('fs-extra');
const globby = require('globby');
const path = require('path');

const pathBuild = './build/';

const {
  i18n: { locales, defaultLocale },
} = require('../../next-i18next.config');

async function moveFiles() {
  try {
    // Static
    await fs.copy('public', pathBuild, { filter: filter => !/^public\/locales/.test(filter) });
    await fs.copy('.next/static/', `${pathBuild}assets`);

    // Default
    await fs.copy(`.next/server/pages/${defaultLocale}.html`, `${pathBuild}index.html`);
    await fs.copy(`.next/server/pages/${defaultLocale}/404.html`, `${pathBuild}/404.html`);
    await fs.copy(`.next/server/pages/${defaultLocale}/500.html`, `${pathBuild}/500.html`);

    // Main
    await fs.copy(`.next/server/pages/${defaultLocale}.html`, `${pathBuild}index.html`);
    const mainPages = await globby([path.resolve(__dirname, `../../.next/server/pages/${defaultLocale}`)]);
    for (const page of mainPages) {
      if (page.indexOf('.json') > 0 || page.indexOf('404') > 0 || page.indexOf('500') > 0) continue;
      await fs.copy(page, page.replace(`.next/server/pages/${defaultLocale}`, 'build').replace('.html', '/index.html'));
    }

    // Muti-languages
    for (const lang of locales) {
      await fs.copy(`.next/server/pages/${lang}.html`, `${pathBuild}${lang}/index.html`);
      const langPages = await globby([path.resolve(__dirname, `../../.next/server/pages/${lang}`)]);
      for (const page of langPages) {
        if (page.indexOf('.json') > 0 || page.indexOf('404') > 0 || page.indexOf('500') > 0) continue;
        await fs.copy(page, page.replace(`.next/server/pages`, 'build').replace('.html', '/index.html'));
      }
    }

    // Locale
    for (const lang of locales) {
      await fs.copy(`.next/server/pages/${lang}.json`, `${pathBuild}data/${lang}.json`, {
        filter: filter => /.json$/.test(filter),
      });
      await fs.copy(`.next/server/pages/${lang}/`, `${pathBuild}data/${lang}/`, {
        filter: filter => !/.html$/.test(filter),
      });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

async function replaceFile() {
  // Replace for hosting
  replace({
    regex: '/_next/static/',
    replacement: '/assets/',
    paths: [pathBuild],
    recursive: true,
    silent: true,
    include: '*.html,*.css,*.js',
  });

  replace({
    regex: 'static/',
    replacement: '',
    paths: [pathBuild],
    recursive: true,
    silent: true,
    include: '_buildManifest.js',
  });

  replace({
    regex: '/_next/',
    replacement: 'assets/',
    paths: [`${pathBuild}assets/chunks/`],
    recursive: true,
    silent: true,
    include: 'main-*.js',
  });

  replace({
    regex: '/assets/data/".concat\\(*..buildId\\)',
    replacement: '/data"',
    paths: [`${pathBuild}/assets/chunks/`],
    recursive: true,
    silent: true,
    include: 'main-*.js',
  });
}

async function exportFiles() {
  console.log('\x1b[36mCustom Export: \033[32mStarting...\033[0m');
  console.log(
    '\033[34minfo\033[0m  - Copying file from \033[33m./next/\033[0m to \033[33m' + pathBuild + '\033[0m folder'
  );
  await moveFiles();
  console.log('\033[34minfo\033[0m  - Updating paths of assets');
  await replaceFile();
}

exportFiles();
