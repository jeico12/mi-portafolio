import { useState, useEffect } from 'react'
import { FrameDescription } from './FrameDescription'
import Vscode from '../assets/imgs/vscode.webp'
import Git from '../assets/imgs/git.webp'
import GitHub from '../assets/imgs/github.webp'
import Office from '../assets/imgs/office.png'
import Canva from '../assets/imgs/canva.png'

export const PivotFD = () => {
  const [centerElement, setCenterElement] = useState(0)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const elements = document.getElementsByClassName('frame-description')

    const distances = Array.from(elements).map((element) => {
      const bounding = element.getBoundingClientRect()
      return Math.abs(bounding.top - windowHeight / 2 + bounding.height / 2)
    })

    const closestElement = distances.indexOf(Math.min(...distances))
    setCenterElement(closestElement)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <FrameDescription
        title='Educación'
        body='Graduado de bachillerato general, he sacado cursos de panaderia, soy estudiante de la carrera Técnico en Ingeniería de Desarrollo de Software en Escuela Especializadan en Ingeniería ITCA-FEPADE San Miguel.'
        hasImgs={false}
        hasModal={false}
        isCenter={centerElement === 0}
      />
      <FrameDescription
        title='Habilidades'
        body='Javascript básico, HTML, CSS, Node.js, Git, GitHub, Vscode.'
        hasImgs={false}
        hasModal={false}
        isCenter={centerElement === 1}
      />
      <FrameDescription
        title='Softwares'
        body='Visual Studio Code, Git, GitHub, Office, Canva.'
        hasImgs
        imgs={[
          Vscode, Git, GitHub, Office, Canva
        ]}
        hasModal={false}
        isCenter={centerElement === 2}
      />
      <FrameDescription
        title='Mis proyectos'
        body='Estos son algunos de mis proyectos, ¡Hecha un vistazo! ...'
        hasImgs={false}
        hasModal
        isCenter={centerElement === 3}
      />
    </>
  )
}
