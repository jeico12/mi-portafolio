import '../assets/styles/PersonalInfo.css'
import { InfoItem } from './InfoItem'
import Yo from '../assets/imgs/Jacob.jpeg'
import Email from '../assets/icons/email.svg'
import GitHub from '../assets/icons/github.svg'
import Linkedin from '../assets/icons/linkedin.svg'
import Instagram from '../assets/icons/instagram.svg'

export const PersonalInfo = () => {
  return (
    <div className='piContainer'>
      <section className='piPersonal'>
        <img src={Yo} alt='IT should be a photo about me' className='piImg' />
        <p className='myName'>Jacob Herrera</p>
      </section>
      <section className='piSocials'>
        <InfoItem icon={Email} text='jacobherrera199828@gmail.com' url='jacobherrera199828@gmail.com' mailto />
        <InfoItem icon={GitHub} text='@Jeico12' url='https://github.com/Jeico12' mailto={false} />
        <InfoItem icon={Linkedin} text='Jacob Herrera' url='https://www.linkedin.com/in/jacob-herrera-77242129a/' mailto={false} />
        <InfoItem icon={Instagram} text='jacob_herrera28' url='https://www.instagram.com/jacob_herrera28/' mailto={false} />
      </section>
    </div>
  )
}
