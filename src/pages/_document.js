import { Html, Head, Main, NextScript } from "next/document";
import { ColorSchemeScript } from "@mantine/core";
import { ptSans } from "./_app";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body className={`${ptSans.variable} font-sans`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
