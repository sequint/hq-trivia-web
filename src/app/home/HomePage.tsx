'use client'

import HomeLogo from './components/HomeLogo'
import HomeNav from './components/HomeNav'
import SiteTitle from './components/SiteTitle'
import JoinGame from './components/JoinGame'
import Game from '../../types/Game'
import styles from './HomePage.module.css'

export default function HomePage() {
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main>
      <HomeNav />
      <div className={ styles.midPageContainer }>
        <div className={ styles.logo }>
          <HomeLogo />
        </div>
        <div className={styles.centerContent}>
          <SiteTitle />
          <JoinGame game={tempGame} />
        </div>
      </div>
    </main>
  )
}
