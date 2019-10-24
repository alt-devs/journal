import NextApp from "next/app";
import React from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { StylesProvider } from "@material-ui/styles";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <StyledComponentsProvider theme={{}}>
          <Component {...pageProps} />
        </StyledComponentsProvider>
      </StylesProvider>
    );
  }
}
