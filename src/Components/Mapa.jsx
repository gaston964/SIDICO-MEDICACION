// Mapa.js
import React from 'react';

const Mapa = () => {
    const handlePdfClick = () => {
        // Redirige a la URL del PDF
        window.open('\Área Productos Biomédicos.pdf', '_blank');
    };

    return (
        <div className='mapa'>
            <h2>Mapa Productos Biomedicos</h2>
            <button className='button-59' onClick={handlePdfClick}>Click para ver el Mapa</button>
        </div>
    );
};

export default Mapa;
