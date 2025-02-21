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
      <div className='grid p-4 text-4xl text-center'>Home is public page</div>
      <APodSearch changeSearch={changeSearch}/>
      <ApodFilter changeFilter={changeFilter}/>
      <ApodList apods={filteredApod()}/>
    </>
  )
}

export default Home