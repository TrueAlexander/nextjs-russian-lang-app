import Link from "next/link"
import Content from "../../components/Content"
import styles from "./../../styles/Exercises.module.scss"

const Item = () => (
  <div className={styles.exercises}>
    <h1>Verbs / Глаголы</h1>
    <Content
      link1="думать"
      link2="жить"
    />
    <Link href="./../exercises">
      <button className="btn">Volver a ejercicios</button> 
    </Link>
  </div>
)

export default Item