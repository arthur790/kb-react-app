import React from 'react'

const ApodFilter = ({changeFilter}) => {
  return (
    <div className='grid gap-2'>
       <h3>Filtra</h3>
        <input className='w-[90%]'  type="text" name="filter-filter" id="filter-filter"
         onChange={(e) => changeFilter(e.target.value)}/>
    </div>
  )
}

export default ApodFilter