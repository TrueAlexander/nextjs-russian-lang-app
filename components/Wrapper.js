import Header from './Header'
import Footer from './Footer'

const Wrapper = ({children}) => {
  return (
    <div className='container'>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Wrapper
