import Heading from "../../components/Heading"
import Link from "next/link"

const Exercises = () => (
  <>
    <Heading text="Lista de ejercicios: " />
    <ol>
      <li><Link href="./exercises/item">Verbos / Глаголы</Link></li>
      <li><Link href="./exercises/item">Casos / Падежи</Link></li>
    </ol>
    <Link href="/">
      <button className="btn">Volver a página inicial</button>
    </Link>
  </>
)

export default Exercises