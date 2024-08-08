import styles from './CreatePopup.module.scss'
import classNames from "classnames";
import save from '../../../assets/Interactions/Save.svg'

const CreatePopup = ({onClick} : {onClick: () => void}) => {
  return <div className={classNames(styles.popupBg, styles.popup)}>
    <form className={styles.popupContent}>
      <span className={styles.name}>Создать локацию</span>
      <input className={styles.inputs} placeholder={'Название'}/>
      <input className={styles.inputs} placeholder={'Штрихкод'}/>
      <input className={styles.inputs} placeholder={'RFID'}/>
      <input className={styles.inputs} placeholder={'Вложенность'}/>
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
        <button type="submit" className={styles.buttonsSave}>
          <img src={save} alt={'Save button'}/>
          СОЗДАТЬ</button>
        <button type="button" className={styles.buttonsCancel} onClick={onClick}>ОТМЕНИТЬ</button>
      </div>
    </form>
  </div>
}

export default CreatePopup;