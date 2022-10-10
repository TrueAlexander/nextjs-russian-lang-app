import Heading from "../components/Heading"
import Link from 'next/link'

const Home = () => {
  return (
  <>
    <Heading text="Bienvenidos!" />
    <Heading text="Добро Пожаловать!" />
    <Link href="./exercises">
      <button className="btn">Ir a ejercicios</button>
    </Link>
  </> 
)}

export default Home