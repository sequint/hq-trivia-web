import Link from 'next/link'
import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import Game from './schemas/Game'
import styles from './page.module.css'

export default function Home() {
  const tempUserName: string = 'sequint'
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main className={ styles.homeContainer }>
      <SiteDescription />
      <JoinGame game={tempGame} />
    </main>
  )
}
