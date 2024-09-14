import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Safar Team" />
        <meta
          name="keywords"
          content="Safar: AI Travel App"
        />
        <meta property="og:locale" content="en-US" />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Safar: AI Travel app"
        />
        <meta
          property="og:description"
          content="Safar: AI Travel app"
        />
        <meta property="og:title" content="Chitz" />
        <meta property="og:url" content="https://chitz.in" />
        <meta name="apple-mobile-web-app-title" content="Chitz" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
