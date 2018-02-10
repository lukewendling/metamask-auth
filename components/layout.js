import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default ({ children, title = 'Wallet Auth Demo' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
      />
    </Head>

    <Container>
      <h3>Wallet Auth Demo</h3>
      {children}
    </Container>
  </div>
);
