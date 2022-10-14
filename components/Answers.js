import styles from '../styles/Answers.module.scss'
import { useEffect, useState } from 'react'

const Answers = ({conjugations}) => {
  
  const [array, setArray] = useState(conjugations)
 
  const newAnswersArray = []
  conjugations.map((el) => newAnswersArray.push(Object.values(el)))
  const toRender = newAnswersArray.sort(() => Math.random() - 0.5)
  
  useEffect(() => {
    setArray(toRender)
  }, [])
  
  return (
    <div className={styles.answers}>
      {array.map((item, ind) => {
        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return <span key={ind}>{answer[1]}</span>
      })})} 
    </div>
  )
}

export default Answers