import Link from "next/link"


const ButtonForward = ({href, num}) => {
  
  return ( 
      <Link
        href={`/${href}/${num}`}
      >
        <button 
          className="btn btn-forward"
        >
          &#8594;
        </button>
      </Link>
  )
}

export default ButtonForward