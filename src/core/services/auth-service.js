import axios from "axios";


const client = axios.create({
    baseURL: import.meta.env.VITE_API_KB_BASE_URL
  });

export const login = (email, password) =>{
    return client.post('/auth/login',{
        email,
        password
    })
}