import { useRouter } from 'next/router'

const ButtonBack = () => {
  const router = useRouter()
  return (
    <button 
      className="btn"
      onClick={() => router.back()}
    >
      &#8592; volver
    </button>
  )
}

export default ButtonBack