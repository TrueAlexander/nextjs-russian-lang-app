import styles from '../styles/Answers.module.scss'

const Answers = ({id, verb}) => {
 console.log(id)
  console.log(verb)
  return (
    <div className={styles.answers}>
      {} 
      <span>Answer1</span>
      <span>Answer2</span>
      <span>Answer3</span>
      <span>Answer4</span>
      <span>Answer5</span>
      <span>Answer6</span>
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