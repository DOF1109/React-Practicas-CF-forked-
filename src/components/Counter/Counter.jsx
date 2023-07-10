// Componente contador

import { useState } from 'react';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return(
        <div className='counter'>
            <p>
                Hiciste click {counter} veces en este botón
            </p>
            <button onClick={increaseCounter}>Incrementar</button>
            <button onClick={resetCounter}>Reiniciar</button>
        </div>
    );
}

export default Counter;
