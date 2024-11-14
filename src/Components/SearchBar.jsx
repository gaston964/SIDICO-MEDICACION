import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [jsonData, setJsonData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/refs/heads/main/CuentasCorrientes-23369.json");
                const data = await response.json();

                // Accede solo a los datos de "Sheet0"
                setJsonData(data.Sheet0 || []);
            } catch (error) {
                console.error('Error al cargar el JSON:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filtra los datos según el término de búsqueda en "Nombre"
    const filteredData = Array.isArray(jsonData)
        ? jsonData.filter((item) =>
            item.Nombre && item.Nombre.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

        const renderIcons = (classification) => {
            return (
                <span className="classification-icons">
                    {classification.includes('H') && (
                        <img src="/heladera.png" alt="Heladera" />
                    )}
                    {classification.includes('A') && (
                        <img src="/alto.png" alt="Alto Riesgo" />
                    )}
                    {classification.includes('P') && (
                        <img src="/psico.png" alt="Psicotrópico" />
                    )}
                </span>
            );
        };
        

    return (
        <div className='PM'>
            <h1>Medicación</h1>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {searchQuery && (
                <ul>
                    {filteredData.map((item) => (
                        <li key={`${item["Cta.Cte"]}-${item.Insumo}-${item.SbIn}-${item.Presentación}`}>
                            <p>Cta.Cte: {item["Cta.Cte"]}</p>
                            <p>Nombre: {item.Nombre}</p>
                            <p>Presentación: {item.Presentación}</p>
                            <p>Insumo: {item.Insumo}</p>
                            <p>SbIn: {item.SbIn}</p>
                            <strong>Cuerpo: {item.Cuerpo}</strong>
                            <p>Clasificación: {renderIcons(item.Clasificacion || '')}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
