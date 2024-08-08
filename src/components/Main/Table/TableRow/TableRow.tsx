import CheckBox from "../../SearchForm/CheckBox/CheckBox.tsx";
import styles from '../Table.module.scss'
import description from '../../../../assets/Interactions/description.svg'
import edit from "../../../../assets/List/Edit.svg";
import help from "../../../../assets/Table/Help.svg";
import {TableDataType} from "../Table.tsx";
import classNames from "classnames";

const TableRow = (tableRowData: TableDataType) => {
  return <tr className={styles.tableR}>
    <th scope="row" className={classNames(styles.tableBodyH,styles.tableBodyHFlex)}>
      <img src={description} alt={'Description'}/>
      <span>{tableRowData.name}</span>
      <img src={edit} alt={'Edit'}/>
    </th>
    <td className={styles.tableD}>
      {tableRowData.description && <img src={help} alt={'help'}/>}
    </td>
    <td className={styles.tableD}>
      <div className={styles.tableDBorder}>{tableRowData.sort}</div>
    </td>
    <td className={styles.tableD}>{tableRowData.tableId}</td>
    <td className={styles.tableDFlex}>
      {tableRowData.fieldType}
      {tableRowData.fieldTypeUrl && <img src={tableRowData.fieldTypeUrl} alt={'Url'}/>}
    </td>
    <td className={styles.tableD}>
      <CheckBox/>
    </td>
    <td className={styles.tableD}>
      <CheckBox/>
    </td>
    <td className={styles.tableD}>
      <CheckBox/>
    </td>
  </tr>
}

export default TableRow;