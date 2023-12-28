'use client'

import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import Game from '../../types/Game'
import HomeNav from './components/HomeNav'

export default function HomePage() {
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main>
      <HomeNav />
      <SiteDescription />
      <JoinGame game={tempGame} />
    </main>
  )
}
