import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="apple-touch-icon" href="icons/icon-192x192.png" /> */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/png" />
          <link rel="icon" href="/favicon.ico" type="image/png" />
          {/* <link rel='manifest' href='/manifest.json' /> */}
          <meta name="theme-color" content="#fff" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
