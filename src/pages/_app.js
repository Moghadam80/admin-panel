import Layout from '@/components/common/layout'
import AppContext from '@/context/AppContext'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  )
}
