import styles from './JoinGame.module.css'

interface params {
  gameName: string,
  userName: string
}

export default function JoinGame(params: params) {
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
            defaultValue={ params.gameName }
          />
          <button className={ styles.joinBtn }>Join as User</button>
          <button className={ `${styles.joinBtn} ${styles.guestBtn}` }>Join as Guest</button>
        </div>
      </div>
    </div>
  )
}