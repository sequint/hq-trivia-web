import styles from './HomeLogo.module.css'

export default function HomeLogo() {
  return (
    <div className={ styles.shapeContainer }>
      <div className={ styles.leftShape }>
        <div className={ styles.lTopHorzLine }></div>
        <div className={ styles.lVertLine }></div>
        <div className={ styles.lBotHorzLine }></div>
      </div>
      <div className={ styles.rightShape }>
        <div className={ styles.rHorzLine }></div>
        <div className={ styles.rVertLine }></div>
      </div>
    </div>
  )
}
