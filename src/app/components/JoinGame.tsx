'use client'

import { useState } from 'react'
import Game from '../schemas/Game'
import styles from './JoinGame.module.css'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'

const GET_GAME = gql`
  query GetGame($name: String!) {
    game(name: $name) {
      id
    }
  }
`

export default function JoinGame(params: { game: Game }) {
  const [ gameName ] = useState<string>(params.game.name)
  const [ errorMessage, setErrorMessage ] = useState<string>(' ')
  const { error, refetch } = useQuery(GET_GAME)

  function checkForGame(event: any): void {
    refetch()
    // If the game does not exist, prevent link event from executing
    if (error) {
      setErrorMessage('This game is not active')
      event.preventDefault()
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
            value={ gameName }
          />
          <Link 
            className={ styles.joinBtn }
            href={`/gameroom/${ gameName }`}
            onClick={checkForGame}
          >
            Join as User
          </Link>
          <Link
            className={ `${styles.joinBtn} ${styles.guestBtn}` }
            href={`/gameroom/${ gameName }`}
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
