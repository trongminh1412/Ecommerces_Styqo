import React from "react";
import Head from "next/head";
import Router from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/header.scss";
import "/styles/globals.scss";
import "/styles/login.scss";
import "/styles/auth.scss";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
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
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
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
