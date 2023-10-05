import React from "react";

function Button (props) {
  const buttonProps = {
    className: "x-button",
    onClick: () => {
      if (props.link !== undefined) {
        window.location.href = props.link
      }
      else {
        window.location.pathname = props.path
      }
    }
  }

  return <button {...buttonProps}>
    {
      props.children
    }
  </button>
}

function ToKensoi () {
  return <Button link="https://kensoi.github.io/">
    На главную
  </Button>
}

function Shop() {
return <Button path="/urfu-oop/shop">
    1. "Магазин"
</Button>
}

function Pet() {
    return <Button path="/urfu-oop/pet">
        2.1 "Питомец"
    </Button>
}

function Bouqet() {
    return <Button path="/urfu-oop/bouqet">
        2.2 "Букет"
    </Button>
}

function Hub() {
    return <React.Fragment>
        <ToKensoi />
        <h1>
            Лабораторные работы по ООП
        </h1>
        <div className="fragment menu">
            <Shop />
        </div>
        <div className="fragment menu">
            <Pet />
            <Bouqet />
        </div>
    </React.Fragment>
}

export default Hub
