import React from 'react'
import github from '../assets/github-mark-white.png'
import linkedin from '../assets/LI-In-Bug.png'

const Navigation = () => {
  return (
    <div className='sticky top-0 z-50 bg-dark flex gap-2 justify-evenly'>
      <a href="#home"><div className='nav-item w-32'>Svet Pavlov</div></a>
      <div className='mb-4'>
        <div className='flex gap-2 justify-evenly'>
          <a href="#about"><div className='nav-item w-16'>About</div></a>
          <a href="#projects"><div className='nav-item w-20'>Projects</div></a>
          <a href="#contact"><div className='nav-item w-20'>Contact</div></a>
        </div>
        <div className='flex gap-2 justify-evenly'>
          <a className='flex items-center gap-2' href='https://github.com/spavlov03' target="_blank" rel="noreferrer">
            <img src={github} alt="GitGub" className='w-10 h-10 logo'/>
            <span>Github</span>
          </a>
          <a className='flex items-center' href='https://www.linkedin.com/in/svet-pavlov/' target="_blank" rel="noreferrer"> 
            <img src={linkedin} alt="LinkedIn" className='w-10 h-10 logo'/>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navigation