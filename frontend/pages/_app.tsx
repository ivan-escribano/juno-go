import "styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/layout/Layout";
import DarkProvider from "context/DarkProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ModalProvider from "context/ModalProvider";
import LoaderProvider from "context/LoaderProvider";

// Create a client
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className="app w-full">
      <QueryClientProvider client={queryClient}>
        <LoaderProvider>
          <ModalProvider>
            <DarkProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </DarkProvider>
          </ModalProvider>
        </LoaderProvider>
        <Toaster position="bottom-right" reverseOrder={false} />
      </QueryClientProvider>
    </section>
  );
}
