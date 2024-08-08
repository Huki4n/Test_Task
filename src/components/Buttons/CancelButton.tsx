import styles from './Buttons.module.scss'

const CancelButton = ({onClick}:{onClick?: () => void}) => {
  return <button type="button" className={styles.buttonsCancel} onClick={onClick}>ОТМЕНИТЬ</button>
}

export default CancelButton;