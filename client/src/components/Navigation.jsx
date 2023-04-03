import React from 'react'

const Navigation = () => {
  return (
    <div className='sticky top-0 z-50 bg-dark flex gap-2 justify-evenly mb-4'>
      <a href="#home"><div className='nav-item w-32'>Svet Pavlov</div></a>
      <div className='flex gap-2 justify-evenly'>
        <a href="#about"><div className='nav-item w-16'>About</div></a>
        <a href="#projects"><div className='nav-item w-20'>Projects</div></a>
        <a href="#contact"><div className='nav-item w-20'>Contact</div></a>
      </div>
    </div>
  )
}

export default Navigation