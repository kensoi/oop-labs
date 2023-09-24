import React from "react";

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

function GithubLink () {
    return <Button link="https://github.com/kensoi/urfu-oop/tree/master/src/Shop">
        Исходник
    </Button>
}

function PagesLink () {
    return <Button link="https://kensoi.github.io/urfu-oop/shop/">
        Результат
    </Button>
}

function LabHub() {
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
        <h1>
            Полезные ссылки
        </h1>
        <div className="menu">
            <GithubLink />
            <PagesLink />
        </div>
    </React.Fragment>
}

export default LabHub
