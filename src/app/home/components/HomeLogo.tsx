import Image from 'next/image'
import logo from '../../../images/gemer-logo.png'

export default function HomeLogo() {
  return (
    <div>
      <Image
        src={ logo }
        alt='Site Logo'
      />
    </div>
  )
}
