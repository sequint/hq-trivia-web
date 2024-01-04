import Image from 'next/image'
import logo from '../../../images/gemer-logo.png'
import styles from './HomeLogo.module.css'

export default function HomeLogo() {
  return (
    <div>
      <Image
        src={ logo }
        alt='Site Logo'
        className={ styles.logoSize }
      />
    </div>
  )
}
