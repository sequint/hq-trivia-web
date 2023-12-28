import Link from 'next/link'
import styles from './HomeNav.module.css'

export default function HomeNav() {
  return (
    <div className={ styles.outerContainer }>
      <div className={ styles.navBtnContainer }>
        <Link
          className={`${styles.homeNavBtn} ${styles.signInBtn}`}
          href='/signin'>
            Sign In
        </Link>
        <Link
          className={`${styles.homeNavBtn} ${styles.signUpBtn}`}
          href='/signin'>
            Sign Up
        </Link>
      </div>
    </div>
  )
}