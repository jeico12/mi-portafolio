import '../assets/styles/Footer.css'

export default function Footer () {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Jacob Herrera. All rights reserved.</p>
      <div>
        <a href='https://www.linkedin.com/in/jacob-herrera-77242129a/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href='https://github.com/Jeico12' target='_blank' rel='noopener noreferrer'>GitHub</a>
      </div>
    </footer>
  )
}
