import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { wrapper } from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/styles/home.scss';
import '/styles/globals.scss';
import '/styles/auth.scss';
import 'styles/slide.scss';
import Axios from 'axios';
import { SessionProvider, getSession } from 'next-auth/react';

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + '/api';
Axios.defaults.withCredentials = true;

const fetcher = async (url) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
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

export default wrapper.withRedux(MyApp);
// function MyApp({ Component, pageProps }) {
//   const Layout = Component.layout || (({ children }) => <>{children}</>);

//   return (
//     <React.Fragment>
//       <Head>
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         <link rel="shortcut icon" href="/favicon.png"></link>
//         <title> 7Hit | Crowdfunding for Everyone</title>
//       </Head>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </React.Fragment>
//   );
// }

// export default MyApp;
