import { mapClassnames, mapModifiers } from 'helpers/components';
import { useEffect, useState } from 'react';
import BlogsService from 'services/BlogsService';
import { numberFormat } from 'utils/common';

interface Props {
  className?: string;
  isLiked?: boolean;
  blogId: string;
}

const Like: React.FC<Props> = ({ className: addClass, isLiked, blogId }) => {
  const [like, setLike] = useState(false);

  const className = mapModifiers('a-like', (isLiked || like) && 'active');
  const classNames = mapClassnames(className, addClass);

  useEffect(() => {
    const lampartPostLike = localStorage.getItem('lampart_posts_like');
    const postsLiked: string[] = lampartPostLike ? JSON.parse(lampartPostLike) : [];
    const index = postsLiked.indexOf(blogId);
    if (index !== -1) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [blogId]);

  const handleLike = () => {
    const likeElement = document.getElementById('o-blog-wrapper__like');
    const lampartPostLike = localStorage.getItem('lampart_posts_like');
    const postsLiked: string[] = lampartPostLike ? JSON.parse(lampartPostLike) : [];
    const index = postsLiked.indexOf(blogId);
    if (index !== -1) {
      postsLiked.splice(index, 1);
      setLike(false);
      BlogsService.postLike(blogId, 'decrease').then((res: any) => {
        if (res.success) {
          if (likeElement !== undefined && likeElement !== null) {
            likeElement.innerText = `${numberFormat(res.data.count_like)}`;
          }
        }
      });
    } else {
      postsLiked.push(blogId);
      setLike(true);
      BlogsService.postLike(blogId, 'increase').then((res: any) => {
        if (res.success) {
          if (likeElement !== undefined && likeElement !== null) {
            likeElement.innerText = `${numberFormat(res.data.count_like)}`;
          }
        }
      });
    }
    localStorage.setItem('lampart_posts_like', JSON.stringify(postsLiked));
  };

  return (
    <button id="button-like" className={classNames} onClick={() => handleLike()}>
      <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
        <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
          <path
            d="M23.169,42.015a1.08,1.08,0,0,1-.763-.314L10.383,29.782a8.023,8.023,0,0,1,0-11.413,8.181,8.181,0,0,1,11.486,0l1.3,1.288,1.3-1.288a8.18,8.18,0,0,1,11.486,0,8.023,8.023,0,0,1,0,11.413L23.932,41.7a1.08,1.08,0,0,1-.763.314Z"
            className="a-like__icon"
          />
          <circle className="a-like__circle" fill="#E2264D" cx="29.5" cy="29.5" r="1.5" />
          <g className="a-like__dots grp1" opacity="0" transform="translate(24)">
            <circle fill="#9FC7FA" cx="2.5" cy="3" r="2" />
            <circle fill="#9FC7FA" cx="7.5" cy="2" r="2" />
          </g>
          <g className="a-like__dots grp2" opacity="0" transform="translate(44 6)">
            <circle fill="#CC8EF5" cx="5" cy="6" r="2" />
            <circle fill="#CC8EF5" cx="2" cy="2" r="2" />
          </g>
          <g className="a-like__dots grp3" opacity="0" transform="translate(52 28)">
            <circle fill="#9CD8C3" cx="2" cy="7" r="2" />
            <circle fill="#8CE8C3" cx="4" cy="2" r="2" />
          </g>
          <g className="a-like__dots grp4" opacity="0" transform="translate(35 50)">
            <circle fill="#F48EA7" cx="6" cy="5" r="2" />
            <circle fill="#F48EA7" cx="2" cy="2" r="2" />
          </g>
          <g className="a-like__dots grp5" opacity="0" transform="translate(14 50)">
            <circle fill="#91D2FA" cx="6" cy="5" r="2" />
            <circle fill="#91D2FA" cx="2" cy="2" r="2" />
          </g>
          <g className="a-like__dots grp6" opacity="0" transform="translate(0 28)">
            <circle fill="#CC8EF5" cx="2" cy="7" r="2" />
            <circle fill="#91D2FA" cx="3" cy="2" r="2" />
          </g>
          <g className="a-like__dots grp7" opacity="0" transform="translate(7 6)">
            <circle fill="#9CD8C3" cx="2" cy="6" r="2" />
            <circle fill="#8CE8C3" cx="5" cy="2" r="2" />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default Like;
