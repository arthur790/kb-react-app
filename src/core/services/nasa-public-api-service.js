import axios from "axios";


const client = axios.create({
    baseURL: import.meta.env.VITE_API_NASA_BASE_URL,
    params: {
      api_key: import.meta.env.VITE_API_NASA_KEY
    }
  });


  export const getApods = (date, startDate, endDate, count) =>{
    const map = new Map();
    if (date != "") map.set('date', date);
    if (startDate != "") map.set('start_date', startDate);
    if (endDate != "") map.set('end_date', endDate);

      return client.get('/apod',{
          params: {
            ...map,
            count
          }
      })
  }