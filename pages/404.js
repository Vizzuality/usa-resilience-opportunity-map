import Head from 'next/head';

// Components
import Page from 'components/page';
import Main from 'components/main';

export default function Custom404() {
  return (
    <Page>
      <Head>
        <title>USA Resilience - 404</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Main>
        <h1>404 - Page not found</h1>
      </Main>
    </Page>
  );
}
