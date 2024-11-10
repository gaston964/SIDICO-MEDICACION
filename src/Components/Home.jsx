import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <nav className="home">
        <h1>Medicación</h1>
        <ul>
            <li>
                <Link to="/buscador">Buscador</Link>
            </li>
        </ul>
    </nav>
);

export default Home;
