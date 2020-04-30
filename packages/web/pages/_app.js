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
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} {...theme} />
        </ThemeProvider>
      </>
    )
  }
}
