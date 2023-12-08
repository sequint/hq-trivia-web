'use client'

import { useState } from 'react';
import Game from '../schemas/Game'
import styles from './JoinGame.module.css'
import Link from 'next/link';

export default function JoinGame(params: { game: Game }) {
  const [errorMessage, setErrorMessage] = useState<string>(' ');

  // Temp vars for testing before imp graphql
  let gameDoesNotExist: boolean = true

  function checkForGame(event: any): void {
    try {
      if (gameDoesNotExist) throw new Error('This game is not active')
    }
    catch (error: any) {
      event.preventDefault(); // Stop href from executing
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
          <Link 
            className={ styles.joinBtn }
            href={`/gameroom/${params.game.name}`}
            onClick={checkForGame}
          >
            Join as User
          </Link>
          <Link
            className={ `${styles.joinBtn} ${styles.guestBtn}` }
            href={`/gameroom/${params.game.name}`}
            onClick={checkForGame}
          >
            Join as Guest
          </Link>
          <p>{ errorMessage }</p>
        </div>
      </div>
    </div>
  )
}