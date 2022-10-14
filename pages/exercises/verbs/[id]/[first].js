import {useRouter} from 'next/router'
import ButtonBack from '../../../../components/ButtonBack'
import ButtonForward from '../../../../components/ButtonForward'
import Answers from './../../../../components/Answers'
import verbsList from './../../../../verbs-new.json'
import styles from "./../../../../styles/Container.module.scss"

const First = ({verb}) => {
  const {query} = useRouter()

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
    <div className={styles.verbsAction + " container"}>
      <h2 className={styles.verbsTitle}>Conjugación del verbo: <span>{verb.infinitive}</span></h2>     
      {conjugations.map((item, index) => {

      const arrayAnswers = Object.values(item)
      return arrayAnswers.map(answer => {
        return (
          <div key={index}>
            <h2><span>{pronouns[index][0]}</span>  <span>respuesta</span></h2>
            <p><span>{pronouns[index][1]}</span>  <span>{answer[0]}</span></p>
          </div>
        )
      })
      })}
      <Answers 
        conjugations={conjugations}
      />
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