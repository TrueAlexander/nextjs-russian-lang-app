import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => ( 
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
      <meta name="description" content="Aprender ruso practicando. Verbos, casos. Ejercicios interactivos"></meta>
    </Head>
    <main>
      <Component {...pageProps} />
    </main> 
  </Layout>
)

export default MyApp
