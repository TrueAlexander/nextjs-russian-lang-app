import Link from "next/link"

const Error = () => (
  <>
    <h1>Error 404</h1>
    <h2>Esta página todavia no existe...:-(</h2>
    <Link href="./">
      <button className="btn">Volver</button>
    </Link>
  </>
)

export default Error