import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="app h-screen w-full">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </section>
  );
}
