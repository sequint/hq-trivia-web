import Game from '@/app/interfaces/Game'

export default function GameRoom(params: { game: Game }) {
  return (
    <div>
      <h1>Game: { params.game.name }!</h1>
    </div>
  )
}
