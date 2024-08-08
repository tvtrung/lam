import { mapClassnames, mapModifiers, ModifierProp } from 'helpers/components';
import { isProduction, isStorybook } from 'helpers/env';
import NextImage, { ImageLoaderProps, ImageProps } from 'next/image';
import { useState } from 'react';
import { useIsSp } from 'utils/hooks';

interface Props extends ImageProps {
  className?: string;
  islazy?: boolean;
  spsrc?: string;
  modifiers?: ModifierProp<'filled'>;
}

const Image: React.FC<Props> = ({ modifiers, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const className = mapModifiers('a-image', modifiers, props.islazy && 'lazy', isLoaded && 'loaded');
  const classNames = mapClassnames(className, props.className);
  const isSp = useIsSp();

  // Serve different image on pc/sp
  props = {
    ...props,
    src: (isSp && props.spsrc) || props.src,
  };

  if (isProduction || isStorybook) {
    props = {
      ...props,
      loader: ({ src, width, quality }: ImageLoaderProps) => `${src}?w=${width}${quality ? `&q=${quality}` : ''}`,
    };
  }
  if (props.islazy) {
    props = { ...props, loading: 'lazy', onLoad: () => setIsLoaded(true) };
  }
  const { islazy, spsrc, ...newProps } = props;

  return (
    <div className={classNames}>
      <NextImage {...newProps} />
    </div>
  );
};

export default Image;
