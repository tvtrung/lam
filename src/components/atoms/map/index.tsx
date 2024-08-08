import { mapClassnames } from 'helpers/components';

interface MapProps {
  id?: string;
  className?: string;
  src: string;
}

const Map: React.FC<MapProps> = ({ className: addClass, id, src }) => {
  const classNames = mapClassnames('a-map', addClass);
  return (
    <div className={classNames} id={id}>
      <iframe
        className="a-map__iframe a-animated-block a-animated-fadein"
        src={src}
        // width="100%"
        // height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="map"
      />
    </div>
  );
};

export default Map;
