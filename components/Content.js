import Link from "next/link"
import styles from "./../styles/Content.module.scss"

const Content = ({link1, link2}) => {
  return (
    <div className={styles.content}>
      <ol>
        <li>
          <Link href="./exercises/item">
            {link1}
          </Link>
        </li>
        <li>
          <Link href="./exercises/item">
            {link2}
          </Link>
        </li>
      </ol>
    </div>

  ) 
}

export default Content 
    