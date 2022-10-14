import Link from 'next/link'
import styles from './../styles/Container.module.scss'
import ButtonBack from '../components/ButtonBack'

const Exercises = () => {
  return (
  <div className={styles.exercises + " container"}>
    <h2 className={styles.verbsTitle}>Nuestros ejercicios:</h2>
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