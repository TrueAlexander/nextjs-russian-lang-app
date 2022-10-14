import Link from "next/link"

const ButtonForward = ({href, verb}) => {

  return ( 
      <Link
        href={`/${href}/${verb.id}`}
        // href={{
        //   pathname: `/${href}/${verb.id}`,
          // query: {
          //   verb: {verb}
          // } 
        // }}
      >
        <button className="btn btn-forward">
          &#8594;
        </button>
      </Link>
  )
}

export default ButtonForward