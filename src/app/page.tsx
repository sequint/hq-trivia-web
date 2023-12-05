import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const tempUserName: String = 'sequint'

  return (
    <main>
      <h1>Welcome to HQ Trivia!</h1>
      <Link href={`/${tempUserName}`}>Go to user home page</Link>
    </main>
  )
}
