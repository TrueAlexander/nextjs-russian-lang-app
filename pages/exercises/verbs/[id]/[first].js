import {useRouter} from 'next/router'
import ButtonBack from '../../../../components/ButtonBack'
import ButtonForward from '../../../../components/ButtonForward'
import Answers from './../../../../components/Answers'
import verbsList from './../../../../verbs.json'
import styles from "./../../../../styles/Container.module.scss"

const First = ({verb}) => {
  const {query} = useRouter()
  console.log(query)
  
  
  return (
    <div className={styles.verbsAction + " container"}>
      <h2 className={styles.verbsTitle}>Conjugación del verbo: <span>{verb.infinitive}</span></h2>     
      <div>
        <h2><span>Я</span>    <span>respuesta</span></h2>
        <p><span>Yo</span>  <span>{verb.yo[0]}</span></p>
      </div>
      <div>
        <h2><span>Ты</span>  <span>respuesta</span></h2>
        <p><span>Tú</span>  <span>{verb.tu[0]}</span></p>
      </div>
      <div>
        <h2><span>Он / Она / Оно</span>  <span>respuesta</span></h2>
        <p><span>Él / Ella</span>  <span>{verb.el[0]}</span></p>
      </div>
      <div>
        <h2><span>Мы</span>  <span>respuesta</span></h2>
        <p><span>Nosotros</span>  <span>{verb.nosotros[0]}</span></p>
      </div>
      <div>
        <h2><span>Вы</span>  <span>respuesta</span></h2>
        <p><span>Ustedes</span>  <span>{verb.ustedes[0]}</span></p>
      </div>
      <div>
        <h2><span>Они</span>  <span>respuesta</span></h2>
        <p><span>Ellos / Ellas</span>  <span>{verb.ellos[0]}</span></p>
      </div>
      <Answers id={query.id} verb={verb}/>
      <span className={styles.comment}>Haga clic en la respuesta correcta</span>
      <ButtonBack/>
      <ButtonForward 
        href={`./exercises/verbs/${verb.id}`} 
        verb={verb} 
      />
    </div>
  )
}

export default First

export function getServerSideProps({params}) {
  const verb =  verbsList.verbs[`${params.id}`]
  
  return {
    props: {verb}
  }
}