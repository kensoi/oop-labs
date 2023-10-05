import { useState } from "react"
import * as XLSX from 'xlsx';
import { Flower } from "./bouqet"

function useUpload () {
    const [table, setTable] = useState([])

    async function handleUpload (e) {
        e.preventDefault()
        const file = e.target.files[0]
        const data = await file.arrayBuffer()
        const workbook = XLSX.read(data);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            defval: "",
        })

        jsonData.shift()
        
        const flowerList = jsonData.map(item => new Flower(...item))
        
        setTable(flowerList)
    }

    if (table.length !== 0) {
        return [table, <></>]
    }

    return [
        table, <div className="fragment">
            <h3>
                Загрузка таблицы
            </h3>
            <h4>
                Перед работой необходимо загрузить таблицу формала .xlsx с данными о цветах для букета.
            </h4>
            <p>
                После загрузки данная страница пропадёт до следующей перезагрузки.
            </p>
            <label htmlFor="upload">
                <button>
                    Загрузить файл
                </button>
                <input type="file" id="upload" onInput={handleUpload}/>
            </label>
        </div>
    ]
}

export default useUpload