import Head from 'next/head';

// Components
import Page from 'components/page';
import Main from 'components/main';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>USA Resilience Opportunity Map</title>
        <meta name="viewport" content="width=800" />
      </Head>

      <Main>
        <h1>Home</h1>
      </Main>
    </Page>
  );
}
