import Container from 'components/organisms/container';
import { mapClassnames, mapModifiers } from 'helpers/components';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';
import { noticeText } from 'consts/common';

interface TabsProps {
  className?: string;
  tabs: {
    title: string;
    content?: ReactNode;
    onCLick?: (e?: React.MouseEvent<HTMLElement>) => void;
    isClosedJob?: boolean;
    active?: boolean;
  }[];
}

const Tabs: React.FC<TabsProps> = ({ className: addClass, tabs }) => {
  const getActiveTabs = (tabs: any) => {
    return tabs.reduce((result: any, tab: any) => {
      return [...result, tab.active];
    }, []);
  };
  const className = mapModifiers('m-tabs');
  const classNames = mapClassnames(className, addClass);
  const [tabActiveIdx, setTabActiveIdx] = useState(getActiveTabs(tabs));
  const setTabActive = (idx: any) => {
    const tabsActive = new Array(tabActiveIdx.length).fill(false);
    tabsActive[idx] = true;
    setTabActiveIdx(tabsActive);
  };
  const router = useRouter();
  return (
    <div className={classNames}>
      <Container modifiers="medium">
        {router.locale === 'ja' && <div className="jp-alert">{noticeText}</div>}
        <ul className="m-tabs__tab-list">
          {tabs.map(({ title, onCLick, isClosedJob }, idx) => (
            <li
              key={`tab-title-${idx}`}
              className={mapClassnames(
                'm-tabs__tab-title',
                tabActiveIdx[idx] && 'm-tabs__tab-title--active',
                isClosedJob && 'm-tabs__tab-title--closed-job'
              )}
              onClick={e => {
                setTabActive(idx);
                onCLick && onCLick(e);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
        <div className="m-tabs__tab-wrapper">
          {tabs.map(({ content, isClosedJob }, idx) => (
            <div
              key={`tab-content-${idx}`}
              className={mapClassnames(
                'm-tabs__tab-content',
                tabActiveIdx[idx] && 'm-tabs__tab-content--active',
                isClosedJob && 'm-tabs__tab-content--closed-job'
              )}
            >
              {content}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Tabs;
