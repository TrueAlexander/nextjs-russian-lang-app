import '../styles/globals.scss'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import Notice from '../components/Notice'

const MyApp = ({ Component, pageProps }) => {

  const [dimensions, setDimensions] = useState({
    width: 1,
    height: 1,
  })

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    window.matchMedia("(orientation:portrait)").addEventListener("change", e => {
      const portrait = e.matches
      const notice = document.querySelector('.notice')
      if (portrait) notice.style.display = 'none'
      else notice.style.display = 'block'
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
      <Notice/>
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
