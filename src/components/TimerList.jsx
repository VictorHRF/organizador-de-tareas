import React from 'react'
import { Timer } from './Timer'

export const TimerList = () => {
  return (
    <div>
        <h1>Pomodoro</h1>
        <Timer initialTime={2}/>
        <Timer initialTime={5}/>
        <Timer initialTime={15}/>
    </div>
  )
}
