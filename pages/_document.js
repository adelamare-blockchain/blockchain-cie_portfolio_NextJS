import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Plausible Analytics - RGPD friendly */}
        <script
          defer
          data-domain="blockchain-cie.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
