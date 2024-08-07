import { LAYOUT_SP } from 'consts/common';
import { useEffect, useState } from 'react';

export const useIsSp = (): boolean => {
  const widthSp = LAYOUT_SP;
  const [isSp, setSp] = useState(false);
  useEffect(() => {
    const windowResize = () => {
      setSp(window.innerWidth <= widthSp);
    };
    window.addEventListener('resize', windowResize);
    windowResize();
    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);
  return isSp;
};
