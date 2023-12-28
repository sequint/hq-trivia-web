import { fredoka } from '../../../utils/fonts'
import styles from './SiteDescription.module.css'

export default function SiteDescription() {
  return (
    <div className={ styles.titleContainer }>
      <h1 className={ styles.title }>
        <span className={ fredoka.className }>HQ Trivia</span>
      </h1>
    </div>
  )
}