import React, { useEffect, useState } from 'react'

export const useTimer = ( time ) => {
  
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
 
    return {
        minuto,
        segundo,
        detenerTimer,
        iniciarTimer,
        reiniciarTimer
    }
}
