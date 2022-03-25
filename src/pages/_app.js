import '../styles/globals.js'
import { AppWrapper } from '@/context';
import GlobalStyle from '@/styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
