import React from 'react'

const ApodList = ({apods = []}) => {

  return (
    <div className='grid gap-4 '>
   
        {
            apods.map((apod, index) =>(
                  <>
                    <div className='grid gap-2  p-6 shadow-xl bg-white'  key={index}>
                      <h3 className='font-semibold text-xl'>{apod.title}</h3>
                    <div 
                    className='grid md:grid-cols-2 gap-2 '>
                        <img className='rounded md:w-[90%]  md:h-[300px] w-full object-cover' src={apod.url} alt="" />
                        <div className="grid gap-2 content-center">
                        <h4 className='font-semibold text-sm text-zinc-800'>Fecha: {apod.date}</h4>
                            <p className='text-justify text-sm'>{apod.explanation}</p>
                           
                        </div>
                        
                    </div>

                    </div>
                  
                  </>
            ))
        }
    </div>
    
  )
}

export default ApodList