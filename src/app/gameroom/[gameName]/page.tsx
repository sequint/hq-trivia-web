import type { Metadata } from 'next'
import Game from '@/types/Game'
 
type Props = {
  params: { game: Game, gameName: string }
}
 
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: params.gameName }
}

export default function GameRoom({ params }: Props) {
  return (
    <div>
      <h1>Game: { params.gameName }!</h1>
    </div>
  )
}
