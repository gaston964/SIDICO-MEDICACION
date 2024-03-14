import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [jsonData, setJsonData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://raw.githubusercontent.com/gaston964/JSON/main/CuentasCorrientes-1421.json");
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error al cargar el JSON:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = jsonData.filter((item) =>
        item.Nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='PM'>
            <h1>Productos Biomedicos</h1>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            {searchQuery && (
                <ul>
                    {filteredData.map((item, index) => (
                        <li key={index}>
                            <p>Nombre: {item.Nombre}</p>
                            <p>Insumo: {item.Insumo}</p>
                            <p>SbIn: {item.SbIn}</p>
                            <strong>Cuerpo: {item.Cuerpo}</strong>
                            <hr />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
