import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/globalStyle';
import { Reset } from 'styled-reset';
import { theme } from '../theme/theme';
import { client } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
