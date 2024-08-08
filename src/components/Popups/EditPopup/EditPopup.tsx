import styles from './EditPopup.module.scss'
import classNames from "classnames";
import del from '../../../assets/Interactions/Delete.svg'
import CancelButton from "../../Buttons/CancelButton.tsx";
import SaveButton from "../../Buttons/SaveButton.tsx";

const EditPopup = ({onClick} : {onClick: () => void}) => {
  return <div className={classNames(styles.popupBg, styles.popup)}>
    <form className={styles.popupContent}>
      <span className={styles.name}>Изменить локацию %название%</span>
      <div>
        <label htmlFor="name" className={styles.inputBlock}>
          Название
          <input className={styles.inputs} id={'name'}/>
        </label>
      </div>
      <div>
        <label htmlFor="barcode" className={styles.inputBlock}>
          Штрихкод
          <input className={styles.inputs} id={'barcode'}/>
        </label>
      </div>
      <div>
        <label htmlFor="rfid" className={styles.inputBlock}>
          RFID
          <input className={styles.inputs} id={'rfid'}/>
        </label>
      </div>
      <div>
        <label htmlFor="nesting" className={styles.inputBlock}>
          Вложенность
          <input className={styles.inputs} id={'nesting'}/>
        </label>
      </div>
      <div className={styles.checkbox}>
        <span className={styles.checkboxText}>Виртуальная локация</span>
        <div className={styles.checkboxSwitch}>
          <input type="checkbox" id="switch" className={styles.checkboxInput}/>
          <label htmlFor="switch" className={styles.checkboxLabel}></label>
        </div>
      </div>
      <div className={styles.checkbox}>
        <span className={styles.checkboxText}>Локация для утерь</span>
        <div className={styles.checkboxSwitch}>
          <input type="checkbox" id="switch-2" className={styles.checkboxInput}/>
          <label htmlFor="switch-2" className={styles.checkboxLabel}></label>
        </div>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.buttonsDelete}>
          <img src={del} alt={'Delete button'}/>
          УДАЛИТЬ
        </button>
        <CancelButton onClick={onClick}/>
        <SaveButton/>
      </div>
    </form>
  </div>
}

export default EditPopup;