import ButtonBack from "../../../components/ButtonBack"
import ButtonForward from "../../../components/ButtonForward"
import styles from "./../../../styles/Container.module.scss"
import verbsList from './../../../verbs-new.json'

const Verb = ({verb}) => {
  
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
    <div className={styles.verbs + " container"}>
      <h2 className={styles.verbsTitle}>Conjugación del verbo: <span>{verb.infinitive}</span></h2>
      <p className="comment">Lee y recuerda conjugaciones</p>
      {conjugations.map((item, index) => {

        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return (
            <div key={index}>
              <h2><span>{pronouns[index][0]}</span>  <span>{answer[1]}</span></h2>
              <p><span>{pronouns[index][1]}</span>  <span>{answer[0]}</span></p>
            </div>
          )
        })
      })}
      <ButtonBack/>
      <ButtonForward 
        // href={`./exercises/verbs/${verb.id}`}
        href={`./exercises/verbs/${verb.id}`}
        num={0}
       
      />
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