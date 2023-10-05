import { createContext, useContext, useEffect, useState } from "react";
import { Flower } from "./bouqet";

const calcContext = createContext()


function ItemRange ({flower}) {
    const [GetCount, setCount] = useContext(calcContext)

    function Minus() {
        const c = GetCount(flower)
        if (c !== 0) {
            setCount(flower, c - 1)
        }
    }

    function Plus () {
        const c = GetCount(flower)

        if (c !== flower.count) {
            setCount(flower, c + 1)
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
    if (GetCount(flower) === 0) {
        return <button onClick={Plus}>
            Добавить в букет
        </button>
    }

    return <>
        <form>
            <input type="button" onClick={handleSubmit} name="minus" value="-" title="убавить" />
            <b>
                {GetCount(flower)} шт.
            </b>
            <input type="button" onClick={handleSubmit} name="plus" value="+" title="добавить" />
        </form>
    </>
}

function useCalc(table, selectedLength) {
    const [bouqet, setBouqet] = useState([])
    
    const itemTools = [
        (flower) => { // получить собранное количество цветов пользователем в букете
            const itemIndex = bouqet.findIndex(
                item => item.id == flower.id
            )

            if (itemIndex >= 0) {
                return bouqet[itemIndex].count
            }
            else {
                return 0
            }
            
        },
        (flower, new_count) => { // обновить количество цветов
            const itemIndex = bouqet.findIndex(
                item => item.id == flower.id
            )
    
            if (itemIndex >= 0) {
                const newBouqet = [...bouqet]
                if (new_count === 0) {
                    newBouqet.splice(itemIndex, 1)
                }
                else {
                    newBouqet[itemIndex] = new Flower(
                        flower.id, flower.name, flower.color, flower.length, flower.price, new_count
                    )
                }
                setBouqet(newBouqet)
            }
            else {
                setBouqet(
                    prev => [...prev, new Flower(
                        flower.id, flower.name, flower.color, flower.length, flower.price, new_count
                    )]
                )
            }
            
        }
    ]

    function CheckForGood () {
        function Reaction () {
            const colorCount = [...new Set(bouqet.map(item => item.color))].length
            const flowerCount = bouqet.reduce((sum, item) => sum + item.count, 0)

            if (colorCount === 1 || flowerCount <= 3) {
                return "Букет хороший"
            }
            
            return "Букет плохой"
        }

        if (bouqet.length !== 0) {
            return <h3>
            Оценка букета: <Reaction />
        </h3>
        }
    }

    function CheckForCost () {
        const flowerCost = bouqet.reduce((sum, item) => sum + item.count * item.price, 0)

        if (bouqet.length !== 0) {
            return <h3>
                Стоимость букета: {flowerCost}₱
            </h3>
        }
    }

    function AddFlowerReaction () {
        if (bouqet.length === 0) {
            return <>
                <h4>
                    Чтобы оценить качество и стоимость букета профессиональными оценщиками, добавьте в букет хотя бы один цветок.
                </h4>
                <p>
                    При фильтрации длины цветов список в букете сбрасывается
                </p>
            </>
        }
    }

    const resultsForm = table.length !== 0 ? <div className="fragment">
        <AddFlowerReaction />
        <CheckForGood />
        <CheckForCost />
    </div> : <></>

    function useContextHook({children}) {
        return <calcContext.Provider children={children} value={itemTools} />
    }

    useEffect(
        () => {
            setBouqet(
                prev => prev.filter(
                    item => item.length == selectedLength
                )
            )
        }, [selectedLength]
    )

    return [
        useContextHook,
        resultsForm
    ]
}

export {
    useCalc, ItemRange
}