import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/home.scss';
import '/styles/globals.scss';
import '/styles/auth.scss';
import { SessionProvider, getSession } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <title> 7Hit | Crowdfunding for Everyone</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
