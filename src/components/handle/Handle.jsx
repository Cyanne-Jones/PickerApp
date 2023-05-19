import './Handle.css'
import { useState } from 'react'

export const Handle = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(()=> {
      setIsAnimating(false)
    }, 3000)
  }
  return (
    <div className='handle' onClick={handleClick}>
      <div className='shaft'></div>
      <div className='arm'>
        <div className={isAnimating ? 'cam-animate cam' : 'cam'}></div>
        <div className={isAnimating ? 'ball-animate ball' : 'ball'}></div>
      </div>

    </div>
  )
}