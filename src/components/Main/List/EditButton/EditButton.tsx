import styles from "../SubListItem/SubListItem.module.scss";
import edit from "../../../../assets/List/Edit.svg";

const EditButton = ({onClick}:{onClick: () => void}) => {

  return <>
    <button className={styles.button} onClick={onClick}>
      <img src={edit} alt={'Delete button'}/>
      <span>Редактировать</span>
    </button>
  </>
}

export default EditButton;