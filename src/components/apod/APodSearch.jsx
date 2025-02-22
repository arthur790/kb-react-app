import { useState } from "react"

const APodSearch = ({ changeSearch }) => {

    const [values, setValues] = useState({
        date: "",
        startDate: "",
        endDate: "",
        count: "10"
    });


    return (
        <>
            <div className="grid gap-2 ">
                <h3 className="text-sm font-bold ">Realiza una búsqueda:</h3>
                <div className="md:flex grid gap-2   ">
                    <div className="md:flex grid   gap-4 rounded-md">
                        <div className="grid ">
                        <label htmlFor="date" >Fecha</label>
                            <input  
                            className="px-4 py-2 border-[2px] border-blue-app-600 outline-none 
                                rounded-md   " type="date" name="date" id="date"

                                onChange={(e) => setValues({...values, date: e.target.value, count: "" })}
                            />

                        </div>

                        <div className="grid">
                        <label htmlFor="start-date" >Fecha Inicio</label>
                            <input  className="px-4 py-2 border-[2px] border-blue-app-600 outline-none 
                                rounded-md " type="date" name="start-date" id="start-date"
                                onChange={(e) => setValues({ ...values, startDate: e.target.value,  count: "",  date: ""  })}

                            />

                        </div>

                        <div className="grid">
                        <label htmlFor="end-date" >Fecha Fin</label>
                            <input  className="px-4 py-2 border-[2px] border-blue-app-600 outline-none 
                                rounded-md " type="date" name="end-date" id="end-date"
                                onChange={(e) => setValues({...values, endDate: e.target.value,  count: "", date: "" })}
                            />

                        </div>
                        <div className="grid">
                        <label htmlFor="end-date" >Número</label>
                            <input  className="px-4 py-2 border-[2px] border-blue-app-600 outline-none 
                                rounded-md " type="number" name="count" id="count"
                                placeholder="10"
                                onChange={(e) => setValues({ ...values, count: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="grid  gap-4  w-full">
                        <button  className=' bg-blue-app-500 text-black text-center md:px-4 md:py-2 py-4 rounded-md border
                      hover:bg-blue-app-600 hover:text-white  transition-colors  md:max-h-[50px] mt-6 '
                        onClick={() => changeSearch(values)}
                        >Buscar</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default APodSearch