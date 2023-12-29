'use client'

import SiteTitle from './components/SiteTitle'
import JoinGame from './components/JoinGame'
import Game from '../../types/Game'
import HomeNav from './components/HomeNav'
import styles from './HomePage.module.css'

export default function HomePage() {
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main>
      <HomeNav />
      <div className={styles.centerContent}>
        <SiteTitle />
        <JoinGame game={tempGame} />
      </div>
    </main>
  )
}
