import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import Cursor from "@components/Cursor";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            {/* <Cursor /> */}
            <Head>
                <title>Nicolas Marqui - Front-end Developer</title>
                <link rel="shortcut icon" href="/icon-512.png" />
                <link rel="apple-touch-icon" href="/icon-512.png" />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="preload"
                    href="/fonts/TTHoves/TTHoves-Regular.woff"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTHoves/TTHoves-Light.woff"
                    as="font"
                    crossOrigin=""
                />
                <link
                    rel="preload"
                    href="/fonts/TTHoves/TTHoves-Bold.woff"
                    as="font"
                    crossOrigin=""
                />
                <link rel="icon" type="image/png" href="/favicon.ico" />
                {/* <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/icons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/icons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/icons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/icons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/icons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/icons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/icons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/icons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/icons/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/icons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/icons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/icons/favicon-16x16.png"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/icons/ms-icon-144x144.png"
                /> */}
                <meta name="theme-color" content="#4361EE" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <meta name="theme-color" content="#06092B" />
                <meta
                    name="description"
                    content="Take beautiful screenshots from your favorite websites"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
