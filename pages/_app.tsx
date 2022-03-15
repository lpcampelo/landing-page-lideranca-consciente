import '../styles/globals.css'
import "../styles/header.module.scss";
import "../styles/button.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
