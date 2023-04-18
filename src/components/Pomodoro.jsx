import React from 'react'
import { Timer } from './Timer'

export const Pomodoro = ({time, color}) => {

  return (
    <div className='etiqueta' style={{backgroundColor:  color}}>
        <Timer time={time} />
    </div>
  )
}
