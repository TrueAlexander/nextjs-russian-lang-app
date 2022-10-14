import { useRouter } from "next/router"
import ButtonBack from "../../../components/ButtonBack"
import styles from "./../../../styles/Verbs.module.scss"

const Verb = () => {

  const {query} = useRouter()

  return (
    <div className={styles.verbs + " container"}>
      <h2 className="blue">Conjugación del verbo: <span>{query.infinitive}</span></h2>
      <div>
        <h3><span>Я</span>  <span>{query.yo[1]}</span></h3>
        <p><span>Yo</span>  <span>{query.yo[0]}</span></p>
      </div>
      <div>
        <h3><span>Ты</span>  <span>{query.tu[1]}</span></h3>
        <p><span>Tu</span>  <span>{query.tu[0]}</span></p>
      </div>
      <div>
        <h3><span>Он / Она / Оно</span>  <span>{query.el[1]}</span></h3>
        <p><span>Él / Ella</span>  <span>{query.el[0]}</span></p>
      </div>
      <div>
        <h3><span>Мы</span>  <span>{query.nosotros[1]}</span></h3>
        <p><span>Nosotros</span>  <span>{query.nosotros[0]}</span></p>
      </div>
      <div>
        <h3><span>Вы</span>  <span>{query.ustedes[1]}</span></h3>
        <p><span>Ustedes</span>  <span>{query.ustedes[0]}</span></p>
      </div>
      <div>
        <h3><span>Они</span>  <span>{query.ellos[1]}</span></h3>
        <p><span>Ellos / Ellas</span>  <span>{query.ellos[0]}</span></p>
      </div>
      <ButtonBack/>
    </div>
    
  )
}

export default Verb