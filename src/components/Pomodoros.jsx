import React from 'react'
import { Pomodoro } from './Pomodoro';

export const Pomodoros = () => {
  return (
    <div>
        <h1>Pomodoro</h1>
        <Pomodoro time={25} color={'#c15c5c'}/>
        <Pomodoro time={5} color={'#4c9196'}/>
        <Pomodoro time={15} color={'#4d7fa2'}/>
    </div>
  )
}
