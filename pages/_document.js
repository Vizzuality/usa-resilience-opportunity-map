import React from 'react';
import Document, { Main, NextScript, Head } from 'next/document';
import sprite from 'svg-sprite-loader/runtime/sprite.build';

export default class MyDocument extends Document {
  render() {
    const spriteContent = sprite.stringify();

    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
