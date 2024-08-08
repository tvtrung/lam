import { ICON_SHAPES } from 'components/atoms/icon';

export const LAYOUT_SP = 640;

type SocialType = {
  title: typeof ICON_SHAPES[number];
  url: string;
};

export const SOCIAL_LIST: SocialType[] = [
  { title: 'facebook', url: 'https://www.facebook.com/LampartHCM/' },
  { title: 'linkedin', url: 'https://www.linkedin.com/in/lamparthcm' },
  // { title: 'instagram', url: 'https://www.instagram.com/lampartcommunity' },
  { title: 'youtube', url: 'https://www.youtube.com/channel/UCpGRDsAp0bVTF2tAYXx_7WA' },
];

export const BLOG_PAGE = 1;
export const BLOG_LIMIT = 12;
export const BLOG_ACTIVE_TYPE = {
  MOST_VIEWED: 'most',
  OLD: 'old',
  FAVORITE: 'favorite',
  NEWEST: 'newest'
};

export const JOB_TYPE = {
  OPEN: 1,
  CLOSED: 2
};

export const noticeText = 'このページのコンテンツはベトナム国内向けのため、翻訳されていません。';
