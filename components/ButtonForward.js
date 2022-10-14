import Link from "next/link"

const ButtonForward = ({href}) => {

  return ( 
      <Link href={href}>
        <button className="btn btn-forward">
          &#8594;
        </button>
      </Link>
  )
}

export default ButtonForward