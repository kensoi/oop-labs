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
  return <Button link="https://kensoi.github.io/urfu-oop/shop/add-employee">
    Показать список сотрудников
  </Button>
}

function AddClient () {
  return <Button link="https://kensoi.github.io/urfu-oop/shop/add-client">
    Показать список клиентов
  </Button>
}

function Menu() {
  return <React.Fragment>
    <h1>
      Лабораторная работа №1: "Магазин"
    </h1>
    <div className="menu">
      <AddEmployee />
      <AddClient />
    </div>
  </React.Fragment>
}

export default Menu;
