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
            <p>
                Перед сборкой нужно загрузить Excel файл с данными о доступных букетах:
            </p>
            <p>
                После загрузки этот блок пропадёт, т.к. в задании не предусмотрен вариант загрузки иной таблицы
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