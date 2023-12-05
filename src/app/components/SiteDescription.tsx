import Image from 'next/image'
import { fredoka } from '../utils/fonts'
import siteCharacter from '../images/site-character.png'
import styles from './SiteDescription.module.css'

export default function SiteDescription() {
  return (
    <>
    <div className={ styles.titleContainer }>
      <h1 className={ styles.title }>
        <span className={ fredoka.className }>HQ Trivia</span>
      </h1>
      <p className={ styles.description }>
        Create your game
        <br />
        Join a game
        <br />
        Challenge your knowledge!
      </p>
    </div>
      <Image
        className={ styles.characterBkgdImg }
        src={ siteCharacter }
        alt='Site Character'
      />
    </>
  )
}