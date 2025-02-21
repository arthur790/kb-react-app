import React from 'react'

const ApodFilter = ({changeFilter}) => {
  return (
    <div className='grid gap-2 '>
        <h3 className="text-sm font-bold">Filtra los resultados:</h3>
        <div className="flex justify-between">
          <input   
          placeholder="filtra por titulo ó por fechas"
          className="p-4 border-[2px] border-blue-app-600 outline-none 
          rounded-md flex-1
          " type="text" name="filter-filter" id="filter-filter"
          onChange={(e) => changeFilter(e.target.value)}/>
          <i className="material-symbols-outlined flex-none mt-4 -ml-10 text-blue-app-500">filter_alt</i>
        </div>
    </div>
  )
}

export default ApodFilter