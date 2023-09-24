import React, { useContext, useState } from "react"
import "./stylesheet.scss"
import ShopContext from "../context"
import { nanoid } from "nanoid"

function BackButton () {
  const buttonProps = {
    children: "Назад",
    onClick: () => {
      window.location.href = "../"
    }
  }

  return <button {...buttonProps} />
}

function AddForm () {
  const context = useContext(ShopContext)

  const [formState, setFormState] = useState({
    name: "",
    card: "",
    currency: 0.0
  })

  function handleChange (event) {
    setFormState(prev=>({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit (event) {
    event.preventDefault()

    const item = {
      ...formState,
      id: nanoid()
    }

    context.setClients(prev => [item, ...prev])
    setFormState({
      name: "",
      card: "",
      currency: 0.0
    })
  }

  const nameProps = {
    type: "text",
    name: "name",
    placeholder: "ФИО клиента",
    value: formState.name,
    onChange: handleChange
  }

  const cardProps = {
    type: "text",
    name: "card",
    placeholder: "Номер дисконтной карты",
    value: formState.card,
    onChange: handleChange
  }

  const currencyProps = {
    type: "text",
    name: "currency",
    placeholder: "Средняя стоимость покупки",
    value: formState.currency === 0 ? "" : formState.currency,
    onChange: handleChange
  }

  const submitProps = {
    type: "submit",
    value: "Добавить"
  }

  return <div className="add-form">
    <form onSubmit={handleSubmit}>
      <input {...nameProps} />
      <input {...cardProps} />
      <input {...currencyProps} />
      <input {...submitProps} />
    </form>
  </div>
}

function useSort(array) {
  const [state, setState] = useState(0);

  function SortButton ({stateID, children}) {
    const buttonProps = {
      children: children,
      onClick: () => setState(stateID),
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
        <SortButton stateID={0}>
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
    switch (state) {
      case 1:
        return array.sort(item => item.card)
      
      case 2:
        return array.sort(item => item.currency)

      default:
        return array
    }
  }

  return [Sort(), SortComponent]
}

function ListWrap ({sortedList}) {
  const context = useContext(ShopContext)

  function Client (props) {
    const item = props.children

    function RemoveItem () {
      const buttonProps = {
        children: "Убрать",
        onClick: () => {
          const list = context.clients
          const new_list = list.filter(
            (item_to_cond, idx) => item_to_cond.id !== item.id
          )
          context.setClients(() => new_list)
        }
      }

      return <button {...buttonProps}/>
    }

    return <div key={item.id} className="item">
      <h4>
        {
          item.name
        }
      </h4>
      <p>
        Дисконтная карта: <code>{item.card}</code>
      </p>
      <p>
        Средняя сумма чека: <code>{item.currency} руб.</code>
      </p>
      <RemoveItem />
    </div>
  }

  return sortedList.map(
    item => <Client>
      {
        item
      }
    </Client>
  )
}

function Results () {
  const context = useContext(ShopContext)

  const count = context.clients.length
  const currency_sum = context.clients.reduce((partialSum, item) => partialSum + item.currency, 0)
  const currency_mid = currency_sum / count

  return <div className="results">
    <h3>
      Вывод
    </h3>
    <p>
      Количество клиентов: <code>{count}</code>
    </p>
    <p>
      Средняя выручка с клиентов (руб/мес): <code>{currency_mid}</code>
    </p>
  </div>
}

function AddClient() {
  const context = useContext(ShopContext)
  const [sortedList, SortComponent] = useSort(context.clients)

  return <React.Fragment>
    <BackButton />
    <h1>
      Список клиентов
    </h1>
    <AddForm />
    <SortComponent />
    <ListWrap sortedList={sortedList}/>
    <Results />
  </React.Fragment>
}

export default AddClient;
