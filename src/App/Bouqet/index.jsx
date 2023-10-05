import useUpload from "./useUpload"
import useFilter from "./useFilter"
import "./stylesheet.scss"
import {useCalc, ItemRange} from "./useCalc"

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
  return <div className="flower-item">
    <h4>
      {item.name} ({item.color})
    </h4>
    <i>
      Стебель: 
    </i>
    <b>
      {item.length}
    </b>
    <i>
      Стоимость: 
    </i>
    <b>
      {item.price} ₽
    </b>
    <i>
      Количество: 
    </i>
    <b>
      {item.count} шт.
    </b>
    <ItemRange flower={item}/>
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
    const [filteredTable, length, FilterForm] = useFilter(table)
    const [CalcContext, ResultsForm] = useCalc(filteredTable)

    return <CalcContext>
        <h1>
            Лабораторная работа №2.2 "Букет"
        </h1>
        {InputFile}
        {FilterForm}
        <Catalog table={filteredTable} />
        {ResultsForm}
        <GoToSource />
    </CalcContext>
}

export default Bouqet