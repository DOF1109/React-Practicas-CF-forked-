// Componente de tarjeta de presentacion

import fotoPerfil from '../../assets/foto-perfil.jfif';
import './PresentationCard.css';

 function PresentationCard() {
    let nombre = 'Daniel';

    return (
        <div className="presentation-card">
            <img className='foto-perfil' src={fotoPerfil} alt="Foto de perfil" />
            <h1>
                Hola, soy {nombre} estoy probando React
            </h1>
        </div>
    );
}

export default PresentationCard;
