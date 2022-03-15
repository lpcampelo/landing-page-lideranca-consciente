import '../styles/globals.css'
import "../styles/header.module.scss";
import "../styles/button.css"
import "../styles/secao1.module.scss"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
