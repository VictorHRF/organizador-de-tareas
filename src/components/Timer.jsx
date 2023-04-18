import React, { useEffect, useState } from 'react'

export const Timer = ({time}) => {

    const [ejecutando, setEjecutando] = useState(false);
    const [minuto, setMinuto] = useState( time );
    const [segundo, setSegundo] = useState(0);
    
    useEffect(() => {
        if(!ejecutando) return;

        if(segundo === 0){
            if( minuto === 0 ) return;
            setMinuto(minuto - 1);
            setSegundo(59);
        } else {
            const timeout = setTimeout(() => setSegundo(segundo - 1), 1000);
            return () => clearTimeout(timeout);
        }
    }, [segundo])

    function detenerTimer() {
        setEjecutando(false);
    }
    
    function iniciarTimer() {
        setEjecutando(true);
        if ( segundo === 0) {
            setSegundo(59);
            setMinuto(minuto - 1);
        } else {
            setSegundo(segundo - 1);
        }
    }

    function reiniciarTimer() {
        setMinuto(time);
        setSegundo(0);        
        setEjecutando(false);
    }
    
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
