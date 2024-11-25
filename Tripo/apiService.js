import axios from 'axios';

//const BASE_URL = 'http://127.0.0.1:5000'; // Actualizează dacă folosești IP local diferit
const BASE_URL = 'http://10.0.2.2:5000';

export const registerUser = async (userData) => {
    const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
    return response.data;
};