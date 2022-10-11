import Link from "next/link"


const Error = () => (
  <div className="">
    <h1>Error 404</h1>
    <h2>Esta página todavia no existe...:-(</h2>
    <Link href="./">
      <button className="btn">&#8592; Volver</button>
    </Link>
  </div>
)

export default Error