import Link from 'next/link'
import SiteDescription from './components/SiteDescription'
import styles from './page.module.css'

export default function Home() {
  const tempUserName: String = 'sequint'

  return (
    <main className={ styles.homeContainer }>
      <SiteDescription />
      <Link href={`/${tempUserName}`}>Go to user home page</Link>
    </main>
  )
}
