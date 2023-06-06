import { useState } from 'react'
import './Screen.css'
import { useHumanStore } from '../hooks/useHumanStore'

import JSConfetti from 'js-confetti'

export const Screen = () => {

  const setHumans = useHumanStore((state) => state.setHumans)
  const pickedHuman = useHumanStore((state) => state.pickedHuman)
  const humans = useHumanStore((state) => state.humans)
  const jsConfetti = new JSConfetti()

  const handleCheck = (humanName) => {
    if (!humans.includes(humanName)) {
      setHumans([...humans, humanName])
    } else {
      const filteredHumans = humans.filter(name => name !== humanName)
      setHumans(filteredHumans)
    }
  }

  const confettiColors = ['#ffe347', '#6457a6', '#7d7abc', '#ef767a', '#23f0c7']
  
  if (pickedHuman) {
    setTimeout(() => {
      jsConfetti.addConfetti({
        confettiRadius: 3,
        confettiColors,
      })
    }, 1000)
  }


  return (
    <div className='screen'>
      {pickedHuman ? 
        <div className='pickedHumanContainer'>
          <h1>{pickedHuman}!</h1>
        </div> : 
        <>
        <h1>Who is here today?</h1>
        <div className='inputContainer'>
      <label className='inputLabel'>
          <input 
            className='checkbox' 
            onChange={() => {handleCheck('Reece')}}
            type='checkbox' 
            id='reece' 
            name='name' 
            value='Reece'/>
          Reece
        </label>
        <label className='inputLabel'>
          <input 
            className='checkbox' 
            onChange={() => {handleCheck('Jared')}}
            type='checkbox' 
            id='jared' 
            name='name' 
            value='Jared'/>
          Jared
        </label>
        <label className='inputLabel'>
          <input 
            className='checkbox' 
            onChange={() => {handleCheck('Cam')}}
            type='checkbox' 
            id='cam' 
            name='name' 
            value='Cam'/>
          Cam
        </label>
        <label className='inputLabel'>
          <input 
            className='checkbox' 
            onChange={() => {handleCheck('Cyanne')}}
            type='checkbox' 
            id='cyanne' 
            name='name' 
            value='Cyanne'/>
          Cyanne
        </label>
      </div>
      </>
      }
    </div>
  )
}