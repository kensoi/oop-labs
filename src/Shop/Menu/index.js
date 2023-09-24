import React from "react"
import "./stylesheet.scss"


function Button (props) {
  const buttonProps = {
    className: "x-button",
    onClick: () => {
      window.location.href = props.link
    }
  }

  return <button {...buttonProps}>
    {
      props.children
    }
  </button>
}

function AddEmployee () {
  return <Button link="./add-employee">
    Добавить или посмотреть список сотрудников
  </Button>
}

function AddClient () {
  return <Button link="./add-client">
    Добавить или посмотреть список клиентов
  </Button>
}

function Menu() {
  return <React.Fragment>
    <h1>
      Лабораторная работа №1: "Магазин"
    </h1>
    <AddEmployee />
    <AddClient />
  </React.Fragment>
}

export default Menu;
