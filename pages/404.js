import Head from 'next/head';

// Components
import Main from 'components/main';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>USA Resilience - 404</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Main>
        <div className="c-404">
          <h1>404 - Page not found</h1>
        </div>
      </Main>
    </>
  );
}
