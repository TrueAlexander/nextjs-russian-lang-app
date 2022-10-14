import Link from 'next/link'
import ButtonBack from '../../../components/ButtonBack'
import verbsList from './../../../verbs.json'

const Verbs = ({verbs}) => {
  // const allVerbs = verbsList.verbs
  
  return (
    <div className="container">
      <h1>Conjugación de verbos:</h1>
      <div>
        {verbs.map(verb => {
          // const verbQuery = {
          //   id: verb.id,
          //   infinitive: verb.infinitive,
          //   yo: verb.yo,
          //   tu: verb.tu,
          //   el: verb.el,
          //   nosotros: verb.nosotros,
          //   ustedes: verb.ustedes,
          //   ellos: verb.ellos
          // }

          return (
            <div key={verb.id}>
              <Link 
                href={`/exercises/verbs/${verb.id}`}
                // href={{
                //   pathname: `/exercises/verbs/${verb.id}`,
                //   query: verbQuery
                // }}
              >
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

