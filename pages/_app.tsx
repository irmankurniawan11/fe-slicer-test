import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Sans_3 } from 'next/font/google'
import Head from 'next/head'

const font = Source_Sans_3({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sobat Bangun</title>
      </Head>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
