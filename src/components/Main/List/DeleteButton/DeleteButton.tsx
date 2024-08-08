import styles from "../SubListItem/SubListItem.module.scss";
import del from "../../../../assets/List/Delete.svg";

const DeleteButton = () => {
  return <button className={styles.button} onClick={(e) => {
    e.stopPropagation();
  }}>
    <img src={del} alt={'Edit button'}/>
    <span>Удалить</span>
  </button>
}

export default DeleteButton;