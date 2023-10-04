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

function AddList () {
  return <div className="menu">
    <AddEmployee />
    <AddClient />
  </div>
}

function GoToSource () {
  return <div className="fragment">
    <Button link="https://github.com/kensoi/urfu-oop/tree/master/src/Shop">
      Исходник
    </Button>
  </div>
}

function Menu() {
  return <React.Fragment>
    <h1>
      Лабораторная работа №1 "Магазин"
    </h1>
    <div className="fragment">
        <h3>
            Задание (в кратце)
        </h3>
        <p>
            Создать программу, иллюстрирующую навыки программирования.
        </p>
        <p>
            В программе должны быть:
        </p>
        <ol>
            <li>
                Ввод сотрудников, клиентов из файла (Базы данных, клавиатуры)
            </li>
            <li>
                Сортировка
            </li>
            <li>
                Вывод сотрудников, клиентов на экран.
            </li>
        </ol>
    </div>
    <AddList />
    <GoToSource />
  </React.Fragment>
}

export default Menu;
