import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import "../public/fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  @page {
    size: A4;
    margin: 0;
  }

  body {
    font-family: 'Yomogi', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
