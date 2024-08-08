import syncButton from '../../../assets/SyncButton/SyncButton.svg'
import styles from "./SyncButton.module.scss"

const SyncButton = () => {
  return <button className={styles.syncButton}>
    <img src={syncButton} alt={'Sync button'}/>
    <span className={styles.textBig}>СИНХРОНИЗАЦИЯ</span>
    <span className={styles.textSmall}>(17.05.2024 15:23:21)</span>
  </button>
}
export default SyncButton;