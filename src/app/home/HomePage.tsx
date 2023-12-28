'use client'

import SiteTitle from './components/SiteTitle'
import JoinGame from './components/JoinGame'
import Game from '../../types/Game'
import HomeNav from './components/HomeNav'

export default function HomePage() {
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main>
      <HomeNav />
      <SiteTitle />
      <JoinGame game={tempGame} />
    </main>
  )
}
