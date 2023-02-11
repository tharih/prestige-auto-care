// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DataProvider } from "../context/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      {/* <Layout> */}
      <Component {...pageProps} />
      {/* </Layout> */}
    </DataProvider>
  );
}
