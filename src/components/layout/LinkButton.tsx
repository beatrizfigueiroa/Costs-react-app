import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

export function LinkButton({ to, text }: any) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}