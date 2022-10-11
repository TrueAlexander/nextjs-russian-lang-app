import '../styles/globals.scss'
import Head from 'next/head'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => ( 
  <>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
      <meta name="description" content="Aprender ruso practicando. Verbos, casos. Ejercicios interactivos"></meta>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>   
  </>
)

export default MyApp
