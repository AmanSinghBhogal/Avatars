import '../styles/globals.css';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/avatars.png" />
      </Head>
      <NextSeo
          title="Avatars By Aman"
          description="This is a NextJs app build by Aman. Its just for learning Dynamic Routing and Basics of CSS modules in NextJs."
        />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
