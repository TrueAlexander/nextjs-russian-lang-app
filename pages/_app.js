import '../styles/globals.scss'
import Head from 'next/head'
// import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  // const [height, setHeight] = useState('500')

  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
  })

  useEffect(() => {
    // setHeight(window.innerHeight)
    // screen.orientation.lock("portrait")
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])

  return <div className='app'>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
      <meta name="description" content="Aprender ruso practicando. Verbos, casos. Ejercicios interactivos"></meta>
    </Head>
    <div className="wrapper">
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      <style jsx>{`
        .wrapper {
          height: ${dimensions.height}px;
          width: ${dimensions.width}px;
        }
      `}</style>
    </div>

  </div>
}

export default MyApp
