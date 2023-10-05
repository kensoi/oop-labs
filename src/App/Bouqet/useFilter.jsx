import { useState } from "react"

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
        filteredTable, length, <div className="fragment">
            <form>
                <label>
                    Длина стебля: 
                    <select onChange={handleSelect}>
                        {
                            lengthList.map(item => <option selected={item === length}>
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