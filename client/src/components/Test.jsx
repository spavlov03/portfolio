import React from 'react'

const Test = () => {
  return (
    <div>
      <div className="parallax"></div>
      <div>
        {/* <img src={recipify} alt="" /> */}
      </div>
      <div className='other'>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </div> 
      <div className="parallax2"></div>
    </div>
  )
}

export default Test