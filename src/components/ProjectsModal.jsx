import { useState } from 'react'
import Modal from 'react-modal'
import { PivotModal } from './PivotModal'
import FS1 from '../assets/imgs/fullstack1.webp'
import FS2 from '../assets/imgs/fullstack2.webp'
import '../assets/styles/ProjectsModal.css'

export default function ProjectsModal () {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <button onClick={openModal} className='main-button'>Ver Proyectos</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal'
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(100, 100, 100, 0.75)' }
        }}
      >
        <PivotModal
          title='FullStack Administrador de Recursos'
          body='Descubra nuestro sistema de gestión de recursos Fullstack, impulsado por Express para API y MySQL para una conectividad perfecta de bases de datos. Este proyecto ofrece una interfaz de usuario intuitiva, construida con JavaScript básico, lo que garantiza una asignación, seguimiento e informes de recursos eficientes. Con almacenamiento local para sesiones de usuario y tecnologías como Express, Knex, CORS y MySQL2, agiliza la gestión de recursos, mejorando la productividad y la experiencia del usuario. Explore hoy el futuro de la gestión de recursos. Lo hizo en colaboración con sus compañeros.'
          hasImgs
          imgs={[FS1, FS2]}
          hasPrjt={false}
          githubUrl='https://github.com/PaolaPaz1/proyecto-final-main'
        />
        <hr />
        <p className='incoming'>Y más por venir ...</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </>
  )
}
