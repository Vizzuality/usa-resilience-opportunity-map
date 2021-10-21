import { Marker } from 'react-map-gl';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { STORIES } from 'constants/stories';

export default function MapStoryMarker({ isVisible }) {
  return (
    <>
      {isVisible &&
        STORIES.map((s) => {
          const {
            href,
            thumb,
            title,
            location: { lat, long },
          } = s;
          return (
            <Marker
              latitude={lat}
              longitude={long}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <Link href={href}>
                <div className="marker-container">
                  <img alt={title} className="image-story" src={thumb} />
                  <p className="title-story">{title}</p>
                </div>
              </Link>
            </Marker>
          );
        })}
    </>
  );
}

MapStoryMarker.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};
