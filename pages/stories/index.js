import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Flicking from '@egjs/react-flicking';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { MediaContextProvider, Media } from 'components/media';
import cx from 'classnames';

import StoriesMain from 'layouts/stories';

import styles from './styles.module.scss';

const STORIES = [
  {
    title: 'New Orleans',
    description:
      'Turning a mixed-income neighbourhood into a model solution for stormwater flooding',
    buttonText: 'Discover',
    image: 'img',
    thumb:
      'https://play-lh.googleusercontent.com/F565AH7FQeC90yy8V1Gykho2GpXRrNO5ruoX86M3LP_1yUqUMRDAZpj1SKGU_AO4mNee=s180',
    href: '/stories/neworleans',
  },
  {
    title: 'Louisville',
    description: 'Lorem ipsum',
    buttonText: 'Discover',
    image: 'img',
    thumb:
      'https://play-lh.googleusercontent.com/F565AH7FQeC90yy8V1Gykho2GpXRrNO5ruoX86M3LP_1yUqUMRDAZpj1SKGU_AO4mNee=s180',
    href: '/stories/louisville',
  },
  {
    title: 'Boulder',
    description:
      'Turning a mixed-income neighbourhood into a model solution for stormwater flooding',
    buttonText: 'Discover',
    image: 'img',
    thumb:
      'https://play-lh.googleusercontent.com/F565AH7FQeC90yy8V1Gykho2GpXRrNO5ruoX86M3LP_1yUqUMRDAZpj1SKGU_AO4mNee=s180',
    href: '/stories/boulder',
  },
  {
    title: 'New York',
    description:
      'Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding.',
    buttonText: 'Discover',
    image: 'img',
    thumb:
      'https://play-lh.googleusercontent.com/F565AH7FQeC90yy8V1Gykho2GpXRrNO5ruoX86M3LP_1yUqUMRDAZpj1SKGU_AO4mNee=s180',
    href: '/stories#',
  },
  {
    title: 'Charlotte',
    description:
      'Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding.',
    buttonText: 'Discover',
    image: 'img',
    thumb:
      'https://play-lh.googleusercontent.com/F565AH7FQeC90yy8V1Gykho2GpXRrNO5ruoX86M3LP_1yUqUMRDAZpj1SKGU_AO4mNee=s180',
    href: '/stories#',
  },
  {
    title: 'Norfolk',
    description:
      'Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding. Turning a mixed-income neighbourhood into a model solution for stormwater flooding.',
    buttonText: 'Discover',
    image: 'img',
    thumb:
      'https://play-lh.googleusercontent.com/F565AH7FQeC90yy8V1Gykho2GpXRrNO5ruoX86M3LP_1yUqUMRDAZpj1SKGU_AO4mNee=s180',
    href: '/stories#',
  },
];

const ScrollToNavigate = () => (
  <div className={styles.ScrollToNavigate}>
    <div className={styles.ScrollToNavigateText}>
      Scroll to navigate through stories
    </div>
    <div className={styles.ScrollToNavigateIcon}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: 'scale(1.3)',
        }}
      >
        <path
          d="M12 5C11.4477 5 11 5.44772 11 6V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V6C13 5.44772 12.5523 5 12 5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16V8ZM18 8V16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8Z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
);

const Stories = () => {
  const flickingBig = useRef();
  const flickingThumbs = useRef();
  const [currentPanel, setCurrentPanel] = useState(0);

  const handleScroll = (dir) => {
    if (flickingBig.current.animating) return;

    if (dir === 'up') {
      if (flickingBig.current.currentPanel.index === 0) return;

      flickingBig.current.prev();
    } else if (dir === 'down') {
      if (
        flickingBig.current.currentPanel.index ===
        flickingBig.current.panels.length - 1
      )
        return;

      flickingBig.current.next();
    }
  };

  const changeToPanel = (i) => {
    if (flickingBig.current.animating) return;

    flickingBig.current.moveTo(i);

    if (!flickingThumbs.current) return;

    setTimeout(() => {
      flickingThumbs.current.renderer.render();
    }, 1);
  };

  const storyThumbsGo = (dir) => {
    if (flickingThumbs.current.animating) return;

    if (dir === 'up') {
      if (flickingThumbs.current.currentPanel.index === 0) return;

      flickingThumbs.current.prev();
    } else if (dir === 'down') {
      if (
        flickingThumbs.current.currentPanel.index ===
        flickingThumbs.current.panels.length - 1
      )
        return;

      flickingThumbs.current.next();
    }
  };

  return (
    <MediaContextProvider>
      <ReactScrollWheelHandler
        upHandler={() => handleScroll('up')}
        downHandler={() => handleScroll('down')}
        disableSwipe
        timeout={300}
        wheelConfig={[6, 20, 0.05]}
        style={{
          position: 'relative',
          display: 'flex',
          flex: '1 0 auto',
        }}
      >
        <StoriesMain>
          <Flicking
            ref={flickingBig}
            align="prev"
            horizontal={false}
            style={{
              width: '100%',
              height: '100%',
            }}
            onWillChange={(panel) => {
              setCurrentPanel(panel.index);
              if (!flickingThumbs.current) return;

              flickingThumbs.current.renderer.render();
            }}
          >
            {STORIES.map((story) => (
              <div className={styles.Story} key={`storypanel-${story.title}`}>
                <div className={styles.StoryContent}>
                  <div className={styles.StoryTitle}>{story.title}</div>
                  <div className={styles.StoryDescription}>
                    {story.description}
                  </div>
                  <Link href={story.href}>
                    <a className={styles.StoryCta}>
                      <span className={styles.StoryCtaText}>
                        {story.buttonText}
                      </span>
                      <span className={styles.StoryCtaIcon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </Flicking>
          <Media greaterThanOrEqual="medium">
            <Flicking
              ref={flickingThumbs}
              align="prev"
              horizontal={false}
              bound
              renderOnlyVisible
              style={{
                position: 'absolute',
                top: '8%',
                left: 'calc(20vw - 160px - 40px)',
                width: '160px',
                height: '70vh',
                padding: '1rem 0',
                zIndex: '5',
              }}
            >
              {STORIES.map((story, i) => (
                <button
                  className={cx(
                    styles.StoryThumb,
                    i === currentPanel && styles.active
                  )}
                  key={`storythumb-${story.title}`}
                  onClick={() => changeToPanel(i)}
                >
                  <div
                    className={cx(
                      styles.StoryThumbImage,
                      i === currentPanel && styles.active
                    )}
                  >
                    <img src={story.thumb} alt="" draggable={false} />
                  </div>
                  <div className={styles.StoryThumbTitle}>{story.title}</div>
                </button>
              ))}
            </Flicking>
            <button
              className={styles.StoryThumbArrowPrev}
              onClick={() => storyThumbsGo('up')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            </button>
            <button
              className={styles.StoryThumbArrowNext}
              onClick={() => storyThumbsGo('down')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
            </button>
          </Media>
          <ScrollToNavigate />
        </StoriesMain>
      </ReactScrollWheelHandler>
    </MediaContextProvider>
  );
};

export default Stories;
