import  { useEffect, useState } from 'react'
import { getApods } from '../core/services/nasa-public-api-service';
import ApodList from '../components/apod/ApodList';
import ApodFilter from '../components/apod/ApodFilter';
import APodSearch from '../components/apod/APodSearch';
import { ToastContainer, toast } from 'react-toastify';
import { errors } from '../core/util/errors-util';

const Home = () => {

  const [apods, setApods] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState({
    date: "",
    startDate: "",
    endDate: "",
    count: 10
  });
  const [loading, setLoading] = useState(false);


 

  const changeFilter = (valueFilter) =>{
    console.log('changeFilter', valueFilter);
    setFilter(valueFilter);
  }
  const changeSearch = (values) =>{
    console.log('values search', values);
    setSearch(values);
    setLoading(true);
    getApods(values.date, values.startDate, values.endDate, values.count)
                .then((res) =>{
                  setLoading(false);
                  console.log('res', res);
                  (Array.isArray(res.data)) ? setApods(res.data) : setApods([res.data])
                }).catch(error =>{
                  console.log('error', error);
                  showErrors(error);
                }).finally(() =>{
                  setLoading(false);
                });

  }
  const showErrors = (err) =>{
    
    toast.error(errors(err), {
      position: "top-right"
    });
  }

  const filteredApod = () =>{
    return apods.filter( item => {
      return (item.title).toLowerCase().includes(filter.toLowerCase())
    })
  }

  return (
    <div className=''>
      <div className='  mx-auto py-16 px-6 grid gap-4 md:max-w-[950px]'>
        <h3 className="text-3xl font-medium text-blue-app-600 text-center">Panel publico de la Nasa</h3>
        <APodSearch changeSearch={changeSearch}/>
        {
          loading ? <p className="text-3xl text-blue-app-800 font-bold text-center">Cargando...</p>
          : 
          <>
            <ApodFilter changeFilter={changeFilter}/>
            <ApodList apods={filteredApod()}/>
           
          </>
        }
         <ToastContainer />
      </div>

    </div>
  )
}

export default Home