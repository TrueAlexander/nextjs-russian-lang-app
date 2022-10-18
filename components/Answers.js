import styles from '../styles/Answers.module.scss'
import { useEffect, useState } from 'react'

const Answers = ({conjugations, setChosen, setCheckResults}) => {

  const [array, setArray] = useState(conjugations)
  const [countClick, setCountClick] = useState(0)

  const newAnswersArray = []
  conjugations.map((el) => newAnswersArray.push(Object.values(el)))

  const toRender = newAnswersArray.sort(() => Math.random() - 0.5)

  useEffect(() => {
    setArray(toRender)
  }, [])

  const clickChoose = (e) => {
    e.target.classList.add('hide')
    setChosen(prev => prev + " " + e.target.innerText)
    setCountClick(prev => prev + 1)
  }

  const clickResult = () => {
    console.log('show results')
    setCheckResults(true)
    //1) compare arrays and comment results:
    //if (arr[i] = arr[j]) {
    // arr[i].addclass('correct') + comment('correcto')
    // } else arr[i].addclass('wrong') + comment('incorrecto') + show the right option
  }

      //2) enable forward button to the next [first] page with mixed lines
    //3) mix the lines and render th next [first page]
    //
  
  return (
    <div className={countClick < 6 ? styles.answers : ""}>
      {countClick < 6 ? array.map((item, ind) => {
        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return (
          <span
            onClick={clickChoose} 
            key={ind}>
              {answer[1]}
            </span>
          )
      })})
      : <button 
          className={styles.btn}
          onClick={clickResult}
        >
          Su resultado
        </button>} 
    </div>
  )
}

export default Answers