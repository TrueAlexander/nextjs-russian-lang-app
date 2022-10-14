import ButtonBack from "../../../components/ButtonBack"
import ButtonForward from "../../../components/ButtonForward"
import styles from "./../../../styles/Verbs.module.scss"
import verbsList from './../../../verbs.json'

const Verb = ({verb}) => {

  return (
    <div className={styles.verbs + " container"}>
      <h2 className="blue">Conjugación del verbo: <span>{verb.infinitive}</span></h2>
      <div>
        <h2><span>Я</span>  <span>{verb.yo[1]}</span></h2>
        <p><span>Yo</span>  <span>{verb.yo[0]}</span></p>
      </div>
      <div>
        <h2><span>Ты</span>  <span>{verb.tu[1]}</span></h2>
        <p><span>Tú</span>  <span>{verb.tu[0]}</span></p>
      </div>
      <div>
        <h2><span>Он / Она / Оно</span>  <span>{verb.el[1]}</span></h2>
        <p><span>Él / Ella</span>  <span>{verb.el[0]}</span></p>
      </div>
      <div>
        <h2><span>Мы</span>  <span>{verb.nosotros[1]}</span></h2>
        <p><span>Nosotros</span>  <span>{verb.nosotros[0]}</span></p>
      </div>
      <div>
        <h2><span>Вы</span>  <span>{verb.ustedes[1]}</span></h2>
        <p><span>Ustedes</span>  <span>{verb.ustedes[0]}</span></p>
      </div>
      <div>
        <h2><span>Они</span>  <span>{verb.ellos[1]}</span></h2>
        <p><span>Ellos / Ellas</span>  <span>{verb.ellos[0]}</span></p>
      </div>
      <ButtonBack/>
      <ButtonForward href="./../forward" />
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