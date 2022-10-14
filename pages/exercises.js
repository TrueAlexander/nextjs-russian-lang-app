import Link from 'next/link'
import styles from './../styles/Exercises.module.scss'
import ButtonBack from '../components/ButtonBack'

const Exercises = () => {
  return (
  <div className={styles.exercises + " container"}>
    <h1>Nuestros ejercicios:</h1>
    <div>
      <Link href="./exercises/verbs">
        <h2>Verbos / Глагóлы &#8594;</h2>
      </Link>
      <Link href="./exercises/cases">
        <h2>Casos / Падежи́ &#8594;</h2>
      </Link> 
    </div>
    <ButtonBack/>
  </div>


)}

export default Exercises