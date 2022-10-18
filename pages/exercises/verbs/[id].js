import ButtonBack from "../../../components/ButtonBack"
import styles from "./../../../styles/Container.module.scss"
import verbsList from '../../../verbs-new.json'
import Read from "../../../components/Read"
import Interact from "../../../components/Interact"
import { useState } from "react"

const Verb = ({verb}) => {

  const [interact, setInteract] = useState(true)

  const conjugations = verb.answers
  const pronouns = [
    ["Я", "Yo"],
    ["Ты", "Tú"],
    ["Он / Она / Оно", "Él / Ella"],
    ["Мы", "Nosotros"],
    ["Вы", "Ustedes"],
    ["Они", "Ellos / Ellas"],
  ]

  return (
    <div className={interact 
      ? styles.verbsAction + " container" 
      : styles.verbs + " container"}
    >
      <h2 className={styles.verbsTitle}>Conjugación del verbo: <span>{verb.infinitive}</span></h2>
      {interact 
        ? <Interact conjugations={conjugations} pronouns={pronouns} />
        : <Read conjugations={conjugations} pronouns={pronouns} />}
      <button
        className="btn btn-forward"
        onClick={() => setInteract(!interact)}
      >
        &#8594;
      </button>
      <ButtonBack/>
    </div>
    
  )
}

export default Verb

export function getServerSideProps({params}) {
  const verb =  verbsList.verbs[`${params.id}`]
  return {
    props: {verb}
  }
}