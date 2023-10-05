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

function Shop() {
return <Button link="https://kensoi.github.io/urfu-oop/shop">
    Лаб. работа 1 "Магазин"
</Button>
}

function Pet() {
    return <Button link="https://kensoi.github.io/urfu-oop/pet">
        Лаб. работа 2.1 "Питомец"
    </Button>
}

function Bouqet() {
    return <Button link="https://kensoi.github.io/urfu-oop/bouqet">
        Лаб. работа 2.2 "Букет"
    </Button>
}

function LabHub() {
    return <React.Fragment>
        <h1>
            Лабораторные работы по ООП
        </h1>
        <div className="menu">
            <Shop />
            <Pet />
            <Bouqet />
        </div>
    </React.Fragment>
}

export default LabHub
