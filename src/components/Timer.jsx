import React, { useEffect, useState } from 'react'
import { useTimer } from '../hooks/useTimer'

export const Timer = ({time}) => {

    const { segundo, minuto, iniciarTimer, detenerTimer, reiniciarTimer} = useTimer( time );
    
    return (
        <>
            <div className='item'>
                <h1 className='timer'>{minuto.toString().padStart(2, '0')}:{segundo.toString().padStart(2, '0')}</h1>
            </div>
            <div className='item'>
                <button onClick={() => iniciarTimer()}>Play</button>
                <button onClick={() => detenerTimer()}>Stop</button>
                <button onClick={() => reiniciarTimer()}>Restart</button>
            </div>
        </>
    )
}
