import Image from 'next/image'
import siteCharacter from '../site-character.png'
import styles from './SiteDescription.module.css'

export default function SiteDescription() {
  return (
    <>
    <div>
      <h1>HQ Trivia</h1>
      <p>Create your game</p>
      <p>Join a game</p>
      <p>Challenge your knowledge!</p>
    </div>
      <Image
        className={ styles.characterBkgdImg }
        src={ siteCharacter }
        alt='Site Character'
      />
    </>
  )
}