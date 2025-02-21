import { useState } from "react"

const APodSearch = ({ changeSearch }) => {

    const [values, setValues] = useState({
        date: "",
        startDate: "",
        endDate: "",
        count: 10
    });


    return (
        <>
            <div className="grid gap-2">
                <h3 className="text-2xl">Realiza una busqueda:</h3>
                <div className="flex gap-2 justify-between">
                    <div className="flex justify-center gap-4 rounded-md">
                        <div>
                            <input className='' type="date" name="date" id="date"

                                onChange={(e) => setValues({...values, date: e.target.value })}
                            />

                        </div>

                        <div>
                            <input className='' type="date" name="start-date" id="start-date"
                                onChange={(e) => setValues({ ...values, startDate: e.target.value })}

                            />

                        </div>

                        <div>
                            <input className='' type="date" name="end-date" id="end-date"
                                onChange={(e) => setValues({...values, endDate: e.target.value})}
                            />

                        </div>
                        <div>
                            <input className='' type="number" name="count" id="count"
                                onChange={(e) => setValues({ ...values, count: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="flex justify-center gap-4 ">
                        <button className=""
                        onClick={() => changeSearch(values)}
                        >Buscar</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default APodSearch