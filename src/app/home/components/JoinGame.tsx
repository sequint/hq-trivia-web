'use client'

import { useState } from 'react'
import Game from '../../../types/Game'
import styles from './JoinGame.module.css'
import Link from 'next/link'
import CircularProgress from '@mui/material/CircularProgress'
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
  const [ loadingDisplay, setLoadingDisplay ] = useState<string>('none')
  const { refetch } = useQuery(GET_GAME_BY_NAME)

  async function checkForGame(event: any): Promise<void> {
    // Display loading component
    setLoadingDisplay('block')

    // Ignore default Link route
    event.preventDefault()

    // Reset error message
    setErrorMessage(' ')

    try {
      // Try getting the game data
      const queryGameResult = await refetch({ gameName: gameName })
      const game: Game = queryGameResult.data?.queryGame[0]

      if (!game || !game.id) throw new Error('This game is not active')

      // Remove loading component visability
      setLoadingDisplay('none')

      // If the game exists route to that gameroom
      const href = `/gameroom/${gameName}`
      window.location.href = href
    }
    catch (error: any) {
      // Remove loading component visability
      setLoadingDisplay('none')

      // If the game does not exist, set the error message
      setErrorMessage(error.message)
    }
  }
  
  return (
    <div className={ styles.joinGameContainer }>
      <div className={ styles.titleCardContainer }>
        <h5 className={ styles.title }>Join a Game!</h5>
        <div
          className={ styles.spinnerContainer }
          style={{display: loadingDisplay }}
        >
          <CircularProgress className={ styles.loadSpinner } />
        </div>
        <div className={ styles.joinGameCard }>
          <input
            className={ styles.gameNameInput }
            type='text'
            name='gameName'
            placeholder='Enter a Game Name'
            defaultValue={ gameName }
            onChange={event => setGameName(event.target.value)}
          />
          <Link 
            className={ styles.joinBtn }
            href='/' // Set to root as default if checkForGame fails
            passHref
            onClick={checkForGame}
          >
            Join as User
          </Link>
          <Link
            className={ `${styles.joinBtn} ${styles.guestBtn}` }
            href='/' // Set to root as default if checkForGame fails
            passHref
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
