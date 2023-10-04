
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
        <Button link="https://github.com/kensoi/urfu-oop/tree/master/src/Bouqet">
            Исходник
        </Button>
    </div>
}

function Bouqet() {
    return <>
        <h1>
            Лабораторная работа №2.2 "Букет"
        </h1>

        <GoToSource />
    </>
}

export default Bouqet