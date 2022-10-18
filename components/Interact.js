// import {useRouter} from 'next/router'
import Answers from '../components/Answers'
import styles from "../styles/Container.module.scss"
import { useEffect, useState } from 'react'

const Interact = ({conjugations, pronouns}) => {

  //check results after interaction:
  const [checkResults, setCheckResults] = useState(false)

  //chosen answers by user from Answer component
  const [chosen, setChosen] = useState()
  const arrFromChosen = chosen ? chosen.split(" ") : []
  const result = arrFromChosen.filter((elem, ind) => ind > 0 ? elem : "")
  //set an array with results of comparison
  const [evaluation, setEvaluation] = useState([])
  //compare result array from user with the corect one
  const compare = () => {
    const arrModel = conjugations.map(item => {
      return Object.values(item).map(i => {
        return i[1]
      })
    })
    setEvaluation(arrModel.map((el, index) => {
      console.log(el[0])
      if (el[0] === result[index]) {
        return true
      } else return false
    }))
  }
  console.log(evaluation)
  useEffect(() => {
    if (checkResults) compare()
  }, [checkResults])

  return (
    <>
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
                  {result[index] ? result[index] : "respuesta"} <div className={evaluation[index] ? 'true res' : 'false res'}></div>
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
        {result.length < 6 ? "Haga clic en la respuesta correcta" : "Haga clic para ver tu resultado"}
      </span>
    </>
  )
}

export default Interact
