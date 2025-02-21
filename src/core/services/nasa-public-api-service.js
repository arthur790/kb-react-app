import axios from "axios";


const client = axios.create({
    baseURL: import.meta.env.VITE_API_NASA_BASE_URL,
    params: {
      api_key: import.meta.env.VITE_API_NASA_KEY
    }
  });


  export const getApods = (prods) =>{
      return client.get('/apod',{
          params: {
            ...prods
          }
      })
  }