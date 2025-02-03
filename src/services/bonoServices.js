import axios from 'axios';

// Reemplaza con la URL de tu backend desplegado en Vercel
const API_URL = 'https://backend-bono.vercel.app/api/bonos';

export const getBonos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createBono = async (bono) => {
    const response = await axios.post(API_URL, bono);
    return response.data;
};

export const updateBono = async (id, bono) => {
    const response = await axios.put(`${API_URL}/${id}`, bono);
    return response.data;
};

export const deleteBono = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};

export const calcularBono = async (bono) => {
    const response = await axios.post(`${API_URL}/calcular`, bono);
    return response.data;
};