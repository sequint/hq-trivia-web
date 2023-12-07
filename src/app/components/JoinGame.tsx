'use client'

import { useState } from 'react';
import Game from '../schemas/Game'
import styles from './JoinGame.module.css'

export default function JoinGame(params: { game: Game }) {
  const [errorMessage, setErrorMessage] = useState<string>(' ');

  // Temp vars for testing before imp graphql
  let gameDoesNotExist: boolean = false;

  function checkForGame(): void {
    try {
      if (gameDoesNotExist) throw new Error('This game is not active')

      console.log('Go to game') // To be replaced with Link
    }
    catch (error: any) {
      setErrorMessage(error.message)
    }
  }
  
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
          <button 
            className={ styles.joinBtn }
            onClick={checkForGame}
          >Join as User</button>
          <button
            className={ `${styles.joinBtn} ${styles.guestBtn}` }
            onClick={checkForGame}
          >Join as Guest</button>
          <p>{ errorMessage }</p>
        </div>
      </div>
    </div>
  )
}