'use client'

import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import Game from '../../types/Game'

export default function HomePage() {
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main>
      <SiteDescription />
      <JoinGame game={tempGame} />
    </main>
  )
}
