import Link from 'next/link'
import ButtonBack from '../../../components/ButtonBack'
import verbsList from './../../../verbs-new.json'
import styles from './../../../styles/Container.module.scss'

const Verbs = ({verbs}) => {
  
  return (
    <div className="container">
      <h2 className={styles.verbsTitle}>Conjugación de verbos:</h2>
      <div>
        {verbs.map(verb => {
          return (
            <div key={verb.id}>
              <Link href={`/exercises/verbs/${verb.id}`}>
                <h2>{verb.infinitive} &#8594;</h2>
              </Link>
            </div>)
          })}
      </div>
      <ButtonBack/>
    </div>
  )   
}

export default Verbs

export function getStaticProps(context) {
  const verbs =  verbsList.verbs
  
  return {
    props: {verbs}
  }
}

