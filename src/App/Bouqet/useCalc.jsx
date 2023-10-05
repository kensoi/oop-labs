import { createContext, useState } from "react";

const calcContext = createContext()


function ItemRange ({flower}) {
    const [count, setCount] = useState(0)

    function Get() {
        return count
    }

    function Minus() {
        const c = Get()
        if (c !== 0) {
            setCount(c - 1)
        }
    }

    function Plus () {
        const c = Get()

        if (c !== flower.count) {
            setCount(c + 1)
        }
    }

    function handleSubmit (e) {
        e.preventDefault()

        switch (e.target.name) {
            case "plus": 
                Plus()
                break

            default: 
                Minus()
        }
    }

    return <form>
        <input type="button" onClick={handleSubmit} name="plus" value="+" title="добавить" />
        <b>
            {Get()}
        </b>
        <input type="button" onClick={handleSubmit} name="minus" value="-" title="убавить" />
    </form>
}

function useCalc(table) {
    const resultsForm = table ? <div className="fragment">
        results
    </div> : <></>

    function useContextHook({children}) {
        return <calcContext.Provider children={children} value={null} />
    }

    return [
        useContextHook,
        resultsForm
    ]
}

export {
    useCalc, ItemRange
}