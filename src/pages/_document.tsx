import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple_touch.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/website_favicon_32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/website_favicon_16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#18181b" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Meharpal Basi" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Data Analyst, Python, Machine Learning, TypeScript, Next.js, Sports Analytics, FPL, Premier League, NFL, NBA, Data Science, Portfolio" />
        <link rel="canonical" href="https://www.meharpalbasi.com" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
