'use client'

import Link from 'next/link'
import SiteDescription from './components/SiteDescription'
import JoinGame from './components/JoinGame'
import Game from './schemas/Game'
import styles from './page.module.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/lib/apolloClient'

export default function Home() {
  const tempUserName: string = 'sequint'
  const tempGame: Game = { id: 1, name: 'newgame' }
  const apolloClient = useApollo()

  return (
    <ApolloProvider client={ apolloClient }>
      <main className={ styles.homeContainer }>
        <SiteDescription />
        <JoinGame game={tempGame} />
      </main>
    </ApolloProvider>
  )
}
