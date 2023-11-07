import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Layout } from './Layout'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
