import { GlobalStyle, theme } from "@swim/shared"

import App from "next/app"
import Head from "next/head"
import React from "react"
import { ThemeProvider } from "styled-components"

// This default export is required in a new `pages/_app.js` file.
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>DP Pool Inc.</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} {...theme} />
        </ThemeProvider>
      </>
    )
  }
}
