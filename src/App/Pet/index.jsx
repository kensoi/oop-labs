import {
    Питомец, Кошка, Лиса, Гибрид
} from "./pet"

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

function GoToSource () {
  return <div className="menu">
    <Button link="https://github.com/kensoi/urfu-oop/tree/master/src/Pet">
      Исходник
    </Button>
  </div>
}

function Says({children}) {
  // children.constructor.name --> название класса
  // источник --> https://stackoverflow.com/questions/10314338/get-name-of-object-or-class

  // но так как я использую create-react-app и gh-pages, мне придётся использовать свойство "children.тип", 
  // дублирующий имя класса специально для production build

  // Аргументы согласно ТЗ:
  // children.name --> переменная обьекта name идущая как аргумент конструктора класса
  // children.говорит() --> метод, выводящий 

  return <div className="fragment">
    {children.тип} по кличке {children.Имя} говорит "{children.говорит()}"
  </div>
}

function Pet() {
    const pet = new Питомец("Нечто")
    const cat = new Кошка("Мурзик")
    const fox = new Лиса("Алиса")
    const hybrid = new Гибрид("Бешеный Макс")

    return <>
      <h1>
        Лабораторная работа №2.1: "Питомец"
      </h1>
      <Says children={pet} />
      <Says children={cat} />
      <Says children={fox} />
      <Says children={hybrid} />
      <GoToSource />
    </>
  }
  
export default Pet;