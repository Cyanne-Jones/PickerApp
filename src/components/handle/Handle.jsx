import './Handle.css'
import { useState } from 'react'
import { useHumanStore } from '../hooks/useHumanStore'

export const Handle = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const setPickedHuman = useHumanStore((state) => state.setPickedHuman)
  const pickedHuman = useHumanStore((state) => state.pickedHuman)
  const humans = useHumanStore((state) => state.humans)

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(()=> {
      setIsAnimating(false)
    }, 3000)
    setPickedHuman(humans.length)
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