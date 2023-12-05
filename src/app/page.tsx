import Link from 'next/link'
import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import styles from './page.module.css'

export default function Home() {
  const tempUserName: string = 'sequint'

  return (
    <main className={ styles.homeContainer }>
      <SiteDescription />
      {/* <Link href={`/${tempUserName}`}>Go to user home page</Link> */}
      <JoinGame gameName='' userName={tempUserName} />
    </main>
  )
}
