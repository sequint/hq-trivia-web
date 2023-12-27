'use client'

import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import Game from '../../types/Game'
import SignInBtn from './components/SignInBtn'

export default function HomePage() {
  const tempGame: Game = { id: 1, name: 'newgame' }

  return (
    <main>
      <SignInBtn />
      <SiteDescription />
      <JoinGame game={tempGame} />
    </main>
  )
}
