import TableRow from "./TableRow/TableRow.tsx";
import styles from './Table.module.scss'
import guide from '../../../assets/Table/Guide.svg'

export interface TableDataType {
  name: string,
  description: boolean,
  sort: number,
  tableId: number,
  fieldType: string,
  fieldTypeUrl: string,
  printInTable: boolean,
  deleteField: boolean,
}

const Table = () => {
  const TableData: TableDataType[] = [
    {name: 'Название', description: true,sort: 500, tableId: 1001,fieldType: 'Строка',fieldTypeUrl:'',printInTable: true, deleteField: false},
    {name: 'Цена', description: false,sort: 510, tableId: 1002,fieldType: 'Число',fieldTypeUrl:'',printInTable: true, deleteField: true},
    {name: 'МОЛ', description: false,sort: 520, tableId: 1003,fieldType: 'Справочник',fieldTypeUrl:guide,printInTable: true, deleteField: false},
    {name: 'Фото', description: false,sort: 530, tableId: 1004,fieldType: 'Файл',fieldTypeUrl:'',printInTable: true, deleteField: false},
    {name: 'Цвет', description: false,sort: 540, tableId: 1005,fieldType: 'Строка',fieldTypeUrl:'',printInTable: true,  deleteField: false},
    {name: 'Локация', description: false,sort: 550, tableId: 1006,fieldType: 'Справочник',fieldTypeUrl:guide,printInTable: true, deleteField: false},
    {name: 'Количество', description: false,sort: 560, tableId: 1007,fieldType: 'Число',fieldTypeUrl:'',printInTable: true, deleteField: false},
    {name: 'Описание', description: false,sort: 570, tableId: 1008,fieldType: 'Текст',fieldTypeUrl:'',printInTable: true, deleteField: false},
    {name: 'Количество', description: false,sort: 580, tableId: 1009,fieldType: 'Число',fieldTypeUrl:'',printInTable: true, deleteField: false},
  ]


  return <table className={styles.table}>
    <thead className={styles.tableHead}>
      <tr>
        <th scope="col" className={styles.tableHeadH}></th>
        <th scope="col" className={styles.tableHeadH}>Описание</th>
        <th scope="col" className={styles.tableHeadH}>Сортировка</th>
        <th scope="col" className={styles.tableHeadH}>ID</th>
        <th scope="col" className={styles.tableHeadH}>Тип поля</th>
        <th scope="col" className={styles.tableHeadH}>Выводить в таблицу</th>
        <th scope="col" className={styles.tableHeadH}>Обязательно</th>
        <th scope="col" className={styles.tableHeadH}>Удалить</th>
      </tr>
    </thead>
    <tbody>
    {TableData.map((item,index) => (
        <TableRow
            key={index}
            name={item.name}
            description={item.description}
            sort={item.sort}
            tableId={item.tableId}
            fieldType={item.fieldType}
            fieldTypeUrl={item.fieldTypeUrl}
            printInTable={item.printInTable}
            deleteField={item.deleteField}
        />
    ))}
    </tbody>
  </table>
}

export default Table;