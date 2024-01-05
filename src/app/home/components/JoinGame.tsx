'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Game from '../../../types/Game'
import styles from './JoinGame.module.css'
import CircularProgress from '@mui/material/CircularProgress'
import { gql, useQuery } from '@apollo/client'
import { fredoka } from '../../../utils/fonts'

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
  const router = useRouter()
  
  const noGameError = new Error()
  noGameError.message = 'This game is not active'
  noGameError.name = 'noGame'

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

      // Remove loading component visability
      setLoadingDisplay('none')

      // If the game does not exist throw no game error
      if (!game || !game.id) throw noGameError

      // If the game exists route to that gameroom
      router.push(`/gameroom/${gameName}`)
    }
    catch (error: any) {
      if (error.name === 'noGame') {
        setErrorMessage(error.message)
      }
      else {
        setErrorMessage('This page did not load properly\nPlease try again')
      }
    }
  }
  
  return (
    <div className={ styles.joinGameContainer }>
      <h5 className={ `${fredoka.className} ${styles.title}` }>Join a Game!</h5>
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
        <div>
          <button 
            className={ styles.joinBtn }
            onClick={checkForGame}
          >
            Join as User
          </button>
          <button
            className={ `${styles.joinBtn} ${styles.guestBtn}` }
            onClick={checkForGame}
          >
            Join as Guest
          </button>
        </div>
        <p>{ errorMessage }</p>
      </div>
    </div>
  )
}
