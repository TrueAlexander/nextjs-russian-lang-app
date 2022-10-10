import Heading from "../components/Heading"
import Link from "next/link"

const Error = () => (
  <>
    <Heading text="Error 404" />
    <h2>Esta página todavia no existe...:-(</h2>
    <Link href="./">
      <button className="btn">Volver</button>
    </Link>
  </>
)

export default Error