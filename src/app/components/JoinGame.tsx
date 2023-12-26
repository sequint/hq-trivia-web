'use client'

import { useState } from 'react'
import Game from '../schemas/Game'
import styles from './JoinGame.module.css'
import Link from 'next/link'
import { gql, useQuery } from '@apollo/client'

const GET_GAME_BY_NAME = gql`
  query GET_GAME_BY_NAME($gameName: String!) {
    queryGame(filter: {name: {alloftext: $gameName}}) {
      id
    }
  }
`

export default function JoinGame(params: { game: Game }) {
  const [ gameName, setGameName ] = useState<string>(params.game.name)
  const [ errorMessage, setErrorMessage ] = useState<string>(' ')
  const { data, refetch } = useQuery(GET_GAME_BY_NAME)

  function updateGameName(event: any): void {
    setGameName(event.target.value)
  }

  function checkForGame(event: any): void {
    refetch({
      gameName: gameName
    })

    // If the game does not exist, prevent link event from executing
    if (!data) {
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
            defaultValue={ gameName }
            onChange={updateGameName}
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
