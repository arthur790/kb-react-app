import axios from "axios";


const client = axios.create({
    baseURL: import.meta.env.VITE_API_KB_BASE_URL
  });

export const registerUser = (name, roleId = 1, email, password) =>{
    return client.post('/users/',{
        name,
        roleId,
        email,
        password
    })
}

export const getProfileUser = (token) =>{
    return client.get('/users/protected',{
        headers:{
            "x-token": token
        }
    })
}