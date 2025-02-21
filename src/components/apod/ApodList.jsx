import React from 'react'

const ApodList = ({apods = []}) => {

  return (
    <div className='grid gap-2'>
        {
            apods.map((apod, index) =>(
                <div key={index}>
                    <h3 className='font-semibold text-2xl'>{apod.title}</h3>
                </div>
            ))
        }
    </div>
    
  )
}

export default ApodList