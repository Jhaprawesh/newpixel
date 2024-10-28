import Layout from "@/components/layout";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@/styles/globals.css";
import { PT_Sans } from "next/font/google";

export const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pt-sans",
});
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="font-customFont">
        <MantineProvider theme={theme} withGlobalClasses>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </main>
    </>
  );
}
