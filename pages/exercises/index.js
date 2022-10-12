import Link from 'next/link'
import styles from './../../styles/Exercises.module.scss'
import ButtonBack from '../../components/ButtonBack'

const Exercises = () => {
  return (
  <div className={styles.exercises + " container"}>
    <h1>Nuestros ejercicios:</h1>
    <Link href="./exercises/verbs">
      <h2>Verbos / Глагóлы &#8594;</h2>
    </Link>
    <Link href="./exercises/cases">
      <h2>Casos / Падежи́ &#8594;</h2>
    </Link> 
    <ButtonBack/>
  </div>


)}

export default Exercises

{/* <h1 className="text-3xl font-bold underline">Conjugación de verbo:</h1>
<div className="flex">
  <h2>Жить</h2><h4> Vivir</h4>
</div>  
<ul>
  <li>Я живу</li>
  <li>Ты живёшь</li>
  <li ><p>Он/Она/Оно живёт</p></li>
  <li>Мы живём</li>
  <li>Вы живёте</li>
  <li>Они живут</li>
</ul>
<button className="bg-sky-500 hover:bg-sky-700 text-white">Vamos practicar</button> */}