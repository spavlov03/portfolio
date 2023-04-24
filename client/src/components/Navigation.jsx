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
          {/* Will add Dark mode/light mode swtich */}
          {/* <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>            
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </div> */}

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