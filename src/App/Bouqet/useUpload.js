import { useState } from "react"
import * as XLSX from 'xlsx';

function useUpload () {
    const [table, setTable] = useState(null)

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

        setTable(jsonData)
    }
    return [
        table, <div className="fragment">
            <input type="file" onInput={handleUpload}/>
        </div>
    ]
}

export default useUpload