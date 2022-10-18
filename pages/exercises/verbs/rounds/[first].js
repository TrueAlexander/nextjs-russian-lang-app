import {useRouter} from 'next/router'
import ButtonBack from '../../../../components/ButtonBack'
import ButtonForward from '../../../../components/ButtonForward'
import Answers from '../../../../components/Answers'
import verbsList from '../../../../verbs-new.json'
import styles from "./../../../../styles/Container.module.scss"
import { useEffect, useState } from 'react'

const First = ({verb}) => {
  const {query} = useRouter()
  const num = 1
 
  const [chosen, setChosen] = useState()
  const [checkResults, setCheckResults] = useState(false)

  const arrFromChosen = chosen ? chosen.split(" ") : []
  const result = arrFromChosen.filter((elem, ind) => ind > 0 ? elem : "")

  const conjugations = verb.answers
  const pronouns = [
    ["Я", "Yo"],
    ["Ты", "Tú"],
    ["Он / Она / Оно", "Él / Ella"],
    ["Мы", "Nosotros"],
    ["Вы", "Ustedes"],
    ["Они", "Ellos / Ellas"],
  ]

 

  useEffect(() => {
    if (checkResults) compare()

  }, [checkResults])
  
  
      const compare = () => {
        console.log(result)
        console.log(Object.values(conjugations))
        const conj = Object.values(conjugations)
        return result.map((item, index) => {
          console.log(Object.values(conj[index])[1])
        })
      }
      

  return (
    <div className={styles.verbsAction + " container"}>
      <h2 className={styles.verbsTitle}>Conjugación del verbo: <span>{verb.infinitive}</span></h2>     
      {!checkResults ? conjugations.map((item, index) => {

      const arrayAnswers = Object.values(item)



      

      return arrayAnswers.map(answer => {
        return (
          <div key={index}>
            <h2><span>{pronouns[index][0]}</span>  <span 
            className={result[index] ? "red" : "placeholder"}
            >
              {result[index] ? result[index] : "respuesta"}
              </span></h2>
            <p><span>{pronouns[index][1]}</span>  <span>{answer[0]}</span></p>
          </div>
        )
      })
      }) : conjugations.map((item, index) => {

        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return (
            <div key={index}>
              <h2><span>{pronouns[index][0]}</span>  <span 
              className={result[index] ? "red" : "placeholder"}
              >
                {result[index] ? result[index] : "respuesta"} <div className={'res ' + 'true'}></div>
                </span></h2>
              <p><span>{pronouns[index][1]}</span>  <span>{answer[0]}</span></p>
            </div>
          )
        })
        })}
      <Answers 
        conjugations={conjugations}
        chosen={chosen}
        setChosen={setChosen}
        setCheckResults={setCheckResults}
      />
      <span className={styles.comment}>
        {result.length < 6 ? "Haga clic en la respuesta correcta" : "Haga clic para saber tu resultado"}
      </span>
      <ButtonBack/>
      <ButtonForward 
        href={`./exercises/verbs/${verb.id}`}
        num ={`${num}`}
      />
    </div>
  )
}

export default First

export function getServerSideProps({params}) {
  const verb =  verbsList.verbs[`${params.id}`]
  console.log(verb);
  return {
    props: {verb}
  }
}