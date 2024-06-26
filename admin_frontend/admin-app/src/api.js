import axios from 'axios';

const API_URL = 'https://apptravel-1.onrender.com/api'; // Adjust the URL to match your backend

export const getPackages = () => axios.get(`${API_URL}/packages`);
export const createPackage = (packageData) => axios.post(`${API_URL}/packages`, packageData);
export const updatePackage = (id, updatedPackage) => axios.put(`${API_URL}/packages/${id}`, updatedPackage);
export const deletePackage = (id) => axios.delete(`${API_URL}/packages/${id}`);
