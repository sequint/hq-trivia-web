import Game from '../interfaces/Game'
import styles from './JoinGame.module.css'

export default function JoinGame(params: { game: Game }) {
  
  return (
    <div className={ styles.joinGameContainer }>
      <div className={ styles.titleCardContainer }>
        <h5 className={ styles.title }>Join a Game!</h5>
        <div className={ styles.joinGameCard }>
          <input
            className={ styles.gameNameInput }
            type='text'
            name='gameName'
            placeholder='Enter a Game Name'
            defaultValue={ params.game.name }
          />
          <button className={ styles.joinBtn }>Join as User</button>
          <button className={ `${styles.joinBtn} ${styles.guestBtn}` }>Join as Guest</button>
        </div>
      </div>
    </div>
  )
}