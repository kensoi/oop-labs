import { useState } from "react"
import { nanoid } from "nanoid"

function useFilter (table) {
    const [length, setLength] = useState('длинная')

    if (!table) {
        return [table, <></>]
    }

    function handleSelect(e) {
        setLength(e.target.value)
    }

    const lengthList = [...new Set(table.map(item => item.length))]
    const filteredTable = table.filter(item => item.length === length)

    return [
        filteredTable, length, table.length === 0 ? <></> : <div className="fragment">
            <form>
                <label>
                    Длина стебля: 
                    <select onChange={handleSelect} defaultValue={length}>
                        {
                            lengthList.map(item => <option key={nanoid()}>
                                {item}
                            </option>)
                        }
                    </select>
                </label>
            </form>
        </div>
    ]
}

export default useFilter