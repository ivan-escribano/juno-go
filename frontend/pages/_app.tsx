import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import DarkProvider from "context/DarkProvider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="app w-full">
      <DarkProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DarkProvider>
    </section>
  );
}
