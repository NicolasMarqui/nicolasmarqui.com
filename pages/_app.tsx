import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import Cursor from "@components/Cursor";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            {/* <Cursor /> */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
