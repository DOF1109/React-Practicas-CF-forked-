// Componente de cuenta regresiva

import './CountDown.css';
import { useState, useEffect } from 'react';

function CountDown(props) {
    // Segundos objetivo del usuario
    const [targetSeconds, setTargetSeconds] = useState(null);
    // Segundos que transcurrieron
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    // Al enviar el formulario
    const parseForm = (e) => {
        // Desactivo la accion por defecto
        e.preventDefault();
        // Obtengo los segundos que ingresó
        let seconds = e.target.seconds.value;
        setTargetSeconds(parseInt(seconds));
    }

    // Realiza el conteo regresivo cada 1 segundo
    useEffect( () => {
        if (targetSeconds === null) return;

        // Si el usuarió ingreso un valor
        setElapsedSeconds(0);
        let interval = setInterval( () => {
            // Paso el estado a su función de seteo para evitar errores
            setElapsedSeconds( (elapsedSeconds) => elapsedSeconds + 1);
        }, 1000 );
        // Limpio el intervalo en el efecto, se ejecuta al
        // desmontar el componente
        return () => {
            clearInterval(interval);
        };

    }, [targetSeconds]);

    if (targetSeconds) {
        if (elapsedSeconds >= targetSeconds) {
            return (
                <>
                    <p className='white'>
                        ¡Terminó!
                    </p>
                    <button onClick={ () => {setTargetSeconds(null)} }>
                        Reiniciar
                    </button>
                </>
            );
        }
        return (
            <p className='white'>
                Quedan {targetSeconds - elapsedSeconds} segundos
            </p>
        );
    }

    return (
        <div className="white">
            <p>
                ¿Cuántos segundos quieres contar?
            </p>
            <form className='count-down-form' action="#" onSubmit={parseForm}>
                <input type="number" name="seconds" />
                <button>Iniciar</button>
            </form>
        </div>
    );
}

export default CountDown;
