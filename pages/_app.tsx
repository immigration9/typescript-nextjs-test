import { AppProps } from "next/app";

import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [thisState, setThisState] = useState({});

  const test: string[] = [];
  useEffect(() => {
    const props = pageProps;
    setThisState({ ...thisState, pageProps, ...test });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
