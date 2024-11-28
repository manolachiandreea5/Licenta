import axios from 'axios';
//import { API_URL } from '@env';
//const BASE_URL = 'http://127.0.0.1:5000'; // Actualizează dacă folosești IP local diferit
const BASE_URL = 'http://10.0.2.2:5000';
const API_URL = 'http://10.0.2.2:5000/api/users'; // URL-ul backend-ului

export const registerUser = async (userData) => {
    const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
    return response.data;
};

export const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data; // Returnează token-ul și mesajul
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Eroare la autentificare');
    }
  };