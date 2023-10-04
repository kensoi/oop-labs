import useUpload from "./useUpload"
// import { Flower, Bouqet as BouqetObj } from "./bouqet"
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

function GoToSource () {
    return <div className="menu">
        <Button link="https://github.com/kensoi/urfu-oop/tree/master/src/Bouqet">
            Исходник
        </Button>
    </div>
}

function FlowerBlock(item) {
  const ID = item[0]
  const name = item[1]
  const color = item[2]
  const length = item[3]
  const price = item[4]
  const count = item[5]

  return <div className="flower-item">
    <h4>
      {name} ({color})
    </h4>
    <i>
      Длина стебля: 
    </i>
    <b>
      {length}
    </b>
    <i>
      Стоимость: 
    </i>
    <b>
      {price} ₽
    </b>
    <i>
      Количество: 
    </i>
    <b>
      {count} шт.
    </b>
  </div>
}

function Catalog ({table}) {
  if (table) {
    return <div className="flowers fragment">
      {table.map(FlowerBlock)}
    </div>
  }
}

function Bouqet() {
    const [table, InputFile] = useUpload();

    console.log(table)

    return <>
        <h1>
            Лабораторная работа №2.2 "Букет"
        </h1>
        {InputFile}
        <Catalog table={table} />
        <GoToSource />
    </>
}

export default Bouqet