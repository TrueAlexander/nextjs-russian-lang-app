import styles from '../styles/Answers.module.scss'

const Answers = ({id, conjugations}) => {
 console.log(id)
  console.log(conjugations)
  return (
    <div className={styles.answers}>
      {conjugations.map((item, index) => {
        const arrayAnswers = Object.values(item)
        return arrayAnswers.map(answer => {
          return <span key={index}>{answer[1]}</span>
      })})} 
    </div>
  )
}

export default Answers

// export function getServerSideProps({params}) {
//   const verb =  verbsList.verbs[`${params.id}`]
//   console.log(verb);
//   return {
//     props: {verb}
//   }
// }