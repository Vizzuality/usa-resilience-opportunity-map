import Main from 'components/main';

import Button from 'components/button';

export default function Home() {
  return (
    <Main>
      <div className="c-home">
        <div className="home-greeting">
          <h2>Welcome to</h2>
          <h1>USA Resilience Map</h1>
          <div className="break-line" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            className="home-cta"
            colors={{ border: '#45bde1', text: '#FFF' }}
            link="/explore"
          >
            Explore data
          </Button>
        </div>
      </div>
    </Main>
  );
}
