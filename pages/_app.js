import '../styles/globals.scss'
import Head from 'next/head'
import Wrapper from '../components/Wrapper'

const MyApp = ({ Component, pageProps }) => ( 
  <>
    {/* <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
      <meta name="description" content="Aprender ruso practicando. Verbos, casos. Ejercicios interactivos"></meta>
    </Head> */}
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>   
  </>
)

export default MyApp
