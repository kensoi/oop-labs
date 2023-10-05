import { useState } from "react"
import { nanoid } from "nanoid"

function useSort(array) {
    const [state, setState] = useState(3);
  
    function SortButton ({stateID, children}) {
      const buttonProps = {
        children: children,
        onClick: () => {
          console.log(stateID)
          setState(stateID)
        },
        className: stateID === state ? "clicked" : "able"
      }
  
      return <button {...buttonProps} />
    }
  
    function SortComponent () {
      return <div className="sort">
        <h3>
          Сортировать по:
        </h3>
        <div className="list">
          <SortButton stateID={3}>
            По имени
          </SortButton>
          <SortButton stateID={1}>
            По номеру карты
          </SortButton>
          <SortButton stateID={2}>
            По средней стоимости
          </SortButton>
        </div>
      </div>
    }
  
    function Sort () {
      // eslint-disable-next-line
      switch (state) {
        case 1:
          return array.sort((item1, item2) => item1.card - item2.card)
        
        case 2:
          return array.sort((item1, item2) => item1.currency - item2.currency)
  
        case 3:
          return array.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          })
      }
    }
  
    return [Sort(), SortComponent]
}

function useFilter (table) {
    const [length, setLength] = useState('длинная')

    if (!table) {
        return [table, <></>]
    }

    const lengthList = [...new Set(table.map(item => item.length))]
    const filteredTable = table.filter(item => item.length === length)

    function SortButton ({children}) {
        const buttonProps = {
          children: children,
          onClick: () => {
            setLength(children)
          },
          className: children === length ? "clicked" : "able"
        }
    
        return <button {...buttonProps} />
    }
    return [
        filteredTable, length, table.length === 0 ? <></> : <div className="sort">
            <h3>
            Фильтровать по длине:
            </h3>
            <div className="list">
                {lengthList.map(
                    item => <SortButton children={item} />
                )}
            </div>
        </div>
    ]
}

export default useFilter