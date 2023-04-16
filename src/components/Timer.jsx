import React, { useEffect, useState } from 'react'

export const Timer = ({initialTime}) => {
    const [ejecutando, setEjecutando] = useState(false);
    const [minuto, setMinuto] = useState( initialTime );
    const [segundo, setSegundo] = useState(0);
    const [editar, setEditar] = useState(false);
    
    useEffect(() => {
        if(!ejecutando) return;

        if(segundo === 0){
            if( minuto === 0 ) return;
            setMinuto(minuto - 1);
            setSegundo(59);
        } else {
            const timeout = setTimeout(() => setSegundo(segundo - 1), 100);
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
    
    return (
        <>
        <div className='etiqueta'>
            <div className='item'>
                <h2>9:00 am</h2>
            </div>
            <div className='item'>
                <h1 className='timer'>{minuto.toString().padStart(2, '0')}:{segundo.toString().padStart(2, '0')}</h1>
            </div>
            <div className='item'>
                <button onClick={() => iniciarTimer()}>Play</button>
                <button onClick={() => detenerTimer()}>Stop</button>
                <button onClick={() => detenerTimer()}>Restart</button>
                <button onClick={() => setEditar(!editar)}>Editar</button>
            </div>
        </div>
        {
            editar &&             
            <form>
                <label>
                    Titulo: 
                    <input type="text" />
                </label>
                <select name="hola" id="">
                    <option value="25min">25 min</option>
                    <option value="5min">5 min</option>
                </select>
            </form>        
        }
        </>
    )
}
