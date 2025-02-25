import "@/styles/globals.css";
import { useState, createContext } from "react";

export const CountContext = createContext();
export const SetCountContext = createContext();

export default function App({ Component, pageProps }) {

  const [ count, setCount ] = useState(0);  // declare high-level "count" state

  return (
    // Here we don't need an empty fragment <> </> because the <CountContext.Provider ... /> etc., has already wrapping it.
      <CountContext.Provider value={count}>
        <SetCountContext.Provider value={setCount}>
          <Component {...pageProps} />;
        </SetCountContext.Provider>
      </CountContext.Provider>
  );
};
