import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="オンラインあみだくじサイトです。完全無料で使えてシンプルかつ簡単にご利用いただけます。" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="favi16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="favi32.png" sizes="32x32" type="image/png" />
          <link rel="icon" href="favi48.png" sizes="48x48" type="image/png" />
          <link rel="icon" href="favi62.png" sizes="62x62" type="image/png" />
          <link rel="apple-touch-icon-precomposed" href="favi150.png" />
          <link rel="canonical" href="https://amidakuji.net/" />
          <meta property="og:title" content="あみだくじサイト | Amidakuji.net" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="オンラインあみだくじサイトです。完全無料で使えてシンプルかつ簡単にご利用いただけます。" />
          <meta property="og:url" content="https://amidakuji.net/" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content="完全無料シンプルあみだくじオンラインサイト" />
          <meta property="og:image" content="https://amidakuji.net/amidakuji.png" />
          <script data-ad-client="ca-pub-9679478765506731" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
