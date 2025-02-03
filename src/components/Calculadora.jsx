import React, { useState } from "react";
import { calcularBono, createBono } from "../services/bonoServices";


const Calculadora = () => {
    const [form, setForm] = useState({ nombre: "", antiguedad: "", sueldo: "" });
    const [detallesBono, setDetallesBono] = useState({ bonoAntiguedad: 0, bonoSueldo: 0, bonoMayor: 0 });
    const [bonoCalculado, setBonoCalculado] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCalcular = async () => {
        const { antiguedad, sueldo } = form;
        const response = await calcularBono({ antiguedad, sueldo });
        console.log(response);
        setDetallesBono(response);
        setBonoCalculado(true);
    };

    const handleGuardar = async () => {
        const bonoData = { ...form, bono: detallesBono.bonoMayor };
        try {
            await createBono(bonoData);
            setForm({ nombre: "", antiguedad: "", sueldo: "" });
            setDetallesBono({ bonoAntiguedad: 0, bonoSueldo: 0, bonoMayor: 0 });
            setBonoCalculado(false);
            setMensaje("Datos enviados correctamente.");
        } catch (error) {
            console.error("Error al guardar el bono:", error);
            setMensaje("Error al enviar los datos.");
        }
    };

    return (
<div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
    <div className="container p-4 border rounded shadow bg-white" style={{ maxWidth: "500px" }}>
        <h1 className="mb-4 text-center">Calculadora de Bonos</h1>
        {mensaje && <div className="alert alert-info">{mensaje}</div>}
        <form>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
            </div>
            <div className="mb-3">
                <label htmlFor="antiguedad" className="form-label">Antigüedad</label>
                <input type="number" className="form-control" id="antiguedad" name="antiguedad" value={form.antiguedad} onChange={handleChange} placeholder="Antigüedad" required />
            </div>
            <div className="mb-3">
                <label htmlFor="sueldo" className="form-label">Sueldo</label>
                <input type="number" className="form-control" id="sueldo" name="sueldo" value={form.sueldo} onChange={handleChange} placeholder="Sueldo" required />
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary me-2" onClick={handleCalcular}>Calcular Bono</button>
                <button type="button" className="btn btn-success" onClick={handleGuardar} disabled={!bonoCalculado}>Guardar Información</button>
            </div>
        </form>
        {bonoCalculado && (
            <div className="mt-4">
                <p><strong>Bono por antigüedad:</strong> ${detallesBono.bonoAntiguedad.toFixed(2)}</p>
                <p><strong>Bono por sueldo:</strong> ${detallesBono.bonoSueldo.toFixed(2)}</p>
                <p><strong>El mayor bono es:</strong> ${detallesBono.bonoMayor.toFixed(2)}</p>
            </div>
        )}
    </div>
</div>



    );
};

export default Calculadora;
