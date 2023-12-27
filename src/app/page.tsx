'use client'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/lib/apolloClient'
import HomePage from './home/HomePage'

export default function Home() {
  const apolloClient = useApollo()

  return (
    <ApolloProvider client={ apolloClient }>
      <HomePage />
    </ApolloProvider>
  )
}
