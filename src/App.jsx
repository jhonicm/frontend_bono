import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculadora from './components/Calculadora';
import VisualizarDatos from './components/VisualizarDatos';

const App = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">BonoApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/calculadora">Calculadora</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/visualizar">Visualizar Datos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/calculadora" element={<Calculadora />} />
                <Route path="/visualizar" element={<VisualizarDatos />} />
            </Routes>
        </div>
    );
};

export default App;