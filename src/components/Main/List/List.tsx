import styles from './List.module.scss'
import NestedList from "./NestedList/NestedList.tsx";
import classNames from "classnames";

export interface SubList {
  name: string,
  num: number,
  loss: boolean,
  virtual: boolean
  barcode: boolean,
  departments: SubList[]
}

const List = ({openEditPopup}: {openEditPopup: () => void}) => {
  const SubList: SubList[] = [
    {name: 'Локация 1', num: 512, loss: false, virtual: false, barcode: false,
      departments:
        [
          {name: 'Подотдел 1', num: 10, loss: true, virtual: false, barcode: false, departments: []},
          {name: 'Подотдел 2', num: 100, loss: false, virtual: false, barcode: false,
            departments:
                [{name: 'Подподотдел 1', num: 2, loss: false, virtual: true, barcode: true,departments:[]},]
          },
          {name: 'Подотдел 3', num: 400, loss: false, virtual: false, barcode: false,departments:[]},
        ]
    },
    {name: 'Локация 2', num: 100, loss: false, virtual: false, barcode: false,departments:[]},
    {name: 'Локация 3', num: 100, loss: false, virtual: false, barcode: false,departments:[]}
  ]


  return <div className={classNames(styles.listMinusMargin)}>
    <NestedList departments={SubList} openEditPopup={openEditPopup}/>
  </div>
}

export default List;