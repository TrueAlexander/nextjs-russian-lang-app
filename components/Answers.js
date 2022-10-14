import styles from '../styles/Answers.module.scss'
import { useEffect, useState } from 'react'

const Answers = ({conjugations}) => {
  const [array, setArray] = useState(conjugations)
  const newAnswersArray = []
  conjugations.map((el) => newAnswersArray.push(Object.values(el)))

  const toRender = newAnswersArray.sort(() => Math.random() - 0.5)

  useEffect(() => {
    setArray(toRender)

    const itemDrags = document.querySelectorAll('.itemDrag')
    const placeholders = document.querySelectorAll('.placeholder')

    itemDrags.forEach((item) => {
      return item.addEventListener('dragstart', dragstart)
    })
    function dragstart(event) {
      // event.target.classList.add('hold');
      setTimeout(() => event.target.classList.add('hide'), 0)
    }


    itemDrags.forEach((item) => {
      return item.addEventListener('dragend', dragend)
    })
    function dragend(event) {
      // event.target.classList.add('hold');
      event.target.classList.remove('hide')
    }


    // placeholders.forEach((placeholder) => {   
    //     placeholder.addEventListener('dragover', () => console.log('dragover'))
    //     placeholder.addEventListener('dragenter', () => console.log('dragenter'))
    //     placeholder.addEventListener('dragleave', () => console.log('dragleave'))
    //     placeholder.addEventListener('drop', () => console.log('drop')) 
    // })


  }, [])
  
  return (
    <div className={styles.answers}>
      {array.map((item, ind) => {
        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return (
          <span className="itemDrag" draggable="true" key={ind}>{answer[1]}</span>
          )
      })})} 
    </div>
  )
}

export default Answers