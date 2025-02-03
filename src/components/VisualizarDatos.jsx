import React, { useState, useEffect } from 'react';
import { getBonos, deleteBono } from '../services/bonoServices';

const VisualizarDatos = () => {
    const [bonos, setBonos] = useState([]);

    useEffect(() => {
        fetchBonos();
    }, []);

    const fetchBonos = async () => {
        const data = await getBonos();
        setBonos(data);
    };

    const handleDelete = async (id) => {
        await deleteBono(id);
        fetchBonos();
    };

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h1 className="mb-4 text-center">Visualizar Bonos</h1>
                    <ul className="list-group">
                        {bonos.map(bono => (
                            <li key={bono._id} className="list-group-item d-flex justify-content-between align-items-center">
                                {bono.nombre} - Antigüedad: {bono.antiguedad} - Sueldo: {bono.sueldo} - Bono: {bono.bono}
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(bono._id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default VisualizarDatos;