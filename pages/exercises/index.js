import Link from "next/link"
import Content from "../../components/Content"
import styles from "./../../styles/Exercises.module.scss"

const Exercises = () => (
  <div className={styles.exercises}>
    <h1>Lista de ejercicios: </h1>
    <Content 
      link1="Verbos / Глагóлы"
      link2="Casos / Падежи́"
    />
    <Link href="/">
      <button className="btn">Volver a página inicial</button>
    </Link>
  </div>
)

export default Exercises