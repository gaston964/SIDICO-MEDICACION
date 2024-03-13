import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <nav className='home'>
            <h1>Productos Biomedicos</h1>
            <ul>
                <li>
                    <Link to={"/buscador"}>Buscador</Link>
                </li>
                <li>
                    <Link to={"/mapa"}>Mapa</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Home