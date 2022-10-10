import Heading from "../../components/Heading"
import Link from "next/link"

const Item = () => (
  <>
    <Heading tag="h3" text="Verbs / Глаголы" />
    <Link href="./../exercises">
      <button className="btn">Volver a ejercicios</button> 
    </Link>
  </>
)

export default Item