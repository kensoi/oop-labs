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
    sallary: "",
    status: 0
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
      name: formState.name,
      sallary: parseFloat(formState.sallary).toFixed(2),
      status: parseInt(formState.status),
      id: nanoid()
    }

    context.setEmployee(prev => [item, ...prev])
    setFormState({
      name: "",
      sallary: "",
      status: 0
    })
  }

  const nameProps = {
    type: "text",
    name: "name",
    placeholder: "ФИО клиента",
    value: formState.name,
    onChange: handleChange
  }

  const sallaryProps = {
    type: "text",
    name: "sallary",
    placeholder: "Сумма зарплаты в месяц",
    value: formState.card,
    onChange: handleChange
  }

  const statusProps = {
    type: "text",
    name: "status",
    placeholder: "Должность (цифрой)",
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
      <input {...sallaryProps} />
      <input {...statusProps} />
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
          По зарплате
        </SortButton>
        <SortButton stateID={2}>
          По должности (ID должности)
        </SortButton>
      </div>
    </div>
  }

  function Sort () {
    switch (state) {
      case 1:
        return array.sort(item => item.sallary)
      
      case 2:
        return array.sort(item => item.status)

      default:
        return array
    }
  }

  return [Sort(), SortComponent]
}

function ListWrap ({sortedList}) {
  const context = useContext(ShopContext)

  function Employee (props) {
    const item = props.children

    function RemoveItem () {
      const buttonProps = {
        children: "Убрать",
        onClick: () => {
          const list = context.employee
          const new_list = list.filter(
            (item_to_cond, idx) => item_to_cond.id !== item.id
          )
          context.setEmployee(() => new_list)
        }
      }

      return <button {...buttonProps}/>
    }

    return <div className="item">
      <h4>
        {
          item.name
        }
      </h4>
      <p>
        Должность (цифрой): <code>{item.status}</code>
      </p>
      <p>
        Ежемесячная зарплата: <code>{item.sallary} руб.</code>
      </p>
      <RemoveItem />
    </div>
  }

  return sortedList.map(
    item => <Employee>
      {
        item
      }
    </Employee>
  )
}

function Results () {
  const context = useContext(ShopContext)

  const count = context.employee.length
  const sallary_sum = context.employee.reduce((partialSum, item) => partialSum + item.sallary, 0)
  const sallary_mid = sallary_sum / count

  return <div className="results">
    <h3>
      Вывод
    </h3>
    <p>
      Количество: <code>{count}</code>
    </p>
    <p>
      Средняя ЗП (руб/мес): <code>{sallary_mid}</code>
    </p>
  </div>
}

function AddClient() {
  const context = useContext(ShopContext)
  const [sortedList, SortComponent] = useSort(context.employee)

  return <React.Fragment>
    <BackButton />
    <h1>
      Добавить клиента
    </h1>
    <AddForm />
    <SortComponent />
    <ListWrap sortedList={sortedList}/>
    <Results />
  </React.Fragment>
}

export default AddClient;
