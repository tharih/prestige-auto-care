// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const email = user?.email;
      } else {
      }
    });
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </Provider>
    </SessionProvider>
  );
}
