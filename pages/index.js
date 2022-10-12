import Link from 'next/link'
import styles from './../styles/Home.module.scss'

const Home = () => {
  return (
  <div className={styles.home + " container"}>
    <div>
      <h1>Bienvenidos!</h1>
      <h1>Добрó Пожáловать!</h1>
    </div>  
    <Link href="./exercises">
      <button className="btn">Ir a ejercicios  &#8594;</button>
    </Link>
  </div> 
)}

export default Home