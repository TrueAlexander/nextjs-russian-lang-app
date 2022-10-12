import Link from 'next/link'
import ButtonBack from '../../../components/ButtonBack'

const verbs = () => {
  return (
    <div className="container">
      <h1>Conjugación de verbos</h1>
      <Link href="./item">
        <h2>vivir / жи́ть &#8594;</h2>
      </Link>
      <Link href="./item2">
      < h2>pensar / ду́мать &#8594;</h2>
      </Link>
      <ButtonBack/>
    </div>
  )
    
}

export default verbs