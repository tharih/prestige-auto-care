import Document, {  Html, Head, Main,  NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }


  render(): JSX.Element {
    return (
      <Html  lang="en">
        <Head>

        <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Prestige Auto Care</title>
  <meta name="author" content="Angfuzsoft" />
  <meta
    name="description"
    content="Mechon - Car Service & Repair HTML Template"
  />
  <meta name="keywords" content="Mechon - Car Service & Repair HTML Template" />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no"
  />
  <link
    rel="apple-touch-icon"
    sizes="57x57"
    href="assets/img/favicons/apple-icon-57x57.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="60x60"
    href="assets/img/favicons/apple-icon-60x60.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="72x72"
    href="assets/img/favicons/apple-icon-72x72.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="76x76"
    href="assets/img/favicons/apple-icon-76x76.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="114x114"
    href="assets/img/favicons/apple-icon-114x114.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="120x120"
    href="assets/img/favicons/apple-icon-120x120.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="144x144"
    href="assets/img/favicons/apple-icon-144x144.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="152x152"
    href="assets/img/favicons/apple-icon-152x152.png"
  />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="assets/img/favicons/apple-icon-180x180.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="192x192"
    href="assets/img/favicons/android-icon-192x192.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="assets/img/favicons/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="96x96"
    href="assets/img/favicons/favicon-96x96.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="assets/img/favicons/favicon-16x16.png"
  />
  <link rel="manifest" href="assets/img/favicons/manifest.json" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta
    name="msapplication-TileImage"
    content="assets/img/favicons/ms-icon-144x144.png"
  />
  <meta name="theme-color" content="#ffffff" />
  <link rel="preconnect" href="https://fonts.googleapis.com/" />
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Hind+Madurai:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="assets/css/app.min.css" />
  <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />

 
</>



        </Head>



        <body>
          <Main />
          <NextScript />

          <Script src="assets/js/vendor/jquery-3.6.0.min.js"></Script>
          <Script src="assets/js/app.min.js"></Script>
          <Script src="assets/js/main.js"></Script>

         

  
        </body>
      </Html>
    )
  }

}

export default MyDocument;
