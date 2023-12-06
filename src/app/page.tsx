import Link from 'next/link'
import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import Game from './interfaces/Game'
import styles from './page.module.css'

export default function Home() {
  const tempUserName: string = 'sequint'
  const tempGame: Game = { id: 1, name: 'new game' }

  return (
    <main className={ styles.homeContainer }>
      <SiteDescription />
      {/* <Link href={`/${tempUserName}`}>Go to user home page</Link> */}
      <JoinGame game={tempGame} />
    </main>
  )
}
