import { fredoka } from '../../../utils/fonts'
import styles from './SiteTitle.module.css'

export default function SiteTitle() {
  return (
    <h1 className={ `${fredoka.className} ${styles.title}` }>
      Trivia
    </h1>
  )
}