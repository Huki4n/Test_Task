import styles from "./Buttons.module.scss";
import save from "../../assets/Interactions/Save.svg";

const SaveButton = () => {
  return <button type="submit" className={styles.buttonsSave}>
    <img src={save} alt={'Save button'}/>
    СОХРАНИТЬ
  </button>
}

export default SaveButton;