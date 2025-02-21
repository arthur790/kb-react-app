import  { useEffect, useState } from 'react'
import { getApods } from '../core/services/nasa-public-api-service';
import ApodList from '../components/apod/ApodList';
import ApodFilter from '../components/apod/ApodFilter';
import APodSearch from '../components/apod/APodSearch';

const Home = () => {

  const [apods, setApods] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState({
    date: "",
    startDate: "",
    endDate: "",
    count: 10
  })
  const count = 10

 

  const changeFilter = (valueFilter) =>{
    console.log('changeFilter', valueFilter);
    setFilter(valueFilter);
  }
  const changeSearch = (values) =>{
    console.log('values search', values);
    setSearch(values);

      getApods(values.date, values.startDate, values.endDate, values.count)
                .then((res) =>{
                  console.log('res', res);
                  (Array.isArray(res.data)) ? setApods(res.data) : setApods([res.data])
                }).catch(error =>{
                  console.log('error', error);
                }).finally(() =>{
                });

  }

  const filteredApod = () =>{
    return apods.filter( item => {
      return (item.title).toLowerCase().includes(filter.toLowerCase())
    })
  }

  return (
    <>
      <div className='w-full h-full  mx-auto py-16 px-6 grid gap-4 justify-center'>
        <h3 className="text-3xl font-medium text-blue-app-600 text-center">Panel publico de la Nasa</h3>
        <APodSearch changeSearch={changeSearch}/>
        <ApodFilter changeFilter={changeFilter}/>
        <ApodList apods={filteredApod()}/>
      </div>

    </>
  )
}

export default Home