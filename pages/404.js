import styles from "./../styles/Error.module.scss"
import ButtonBack from "../components/ButtonBack"

const Error = () => { 
  return (
  <div className={styles.error + " container"}>
    <h1>Error 404</h1>
    <h2>Esta página todavia no existe...:-(</h2>
    <ButtonBack/>
  </div>
)}

export default Error