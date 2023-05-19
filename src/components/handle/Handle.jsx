import './Handle.css'
import { useState } from 'react'
import { useHumanStore } from '../hooks/useHumanStore'

export const Handle = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const setPickedHuman = useHumanStore((state) => state.setPickedHuman)
  const pickedHuman = useHumanStore((state) => state.pickedHuman)
  const humans = useHumanStore((state) => state.humans)
  const resetPickedHuman = useHumanStore((state) => state.resetPickedHuman)
  const setHumans = useHumanStore((state) => state.setHumans)


  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(()=> {
      setIsAnimating(false)
    }, 1500)
    if(pickedHuman) {
      resetPickedHuman()
      setHumans([])
    } else {
    setPickedHuman(humans.length)
    }
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