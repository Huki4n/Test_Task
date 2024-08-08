import styles from './AddButton.module.scss'
import plus from '../../../assets/Interactions/plus.svg'

const AddButton = ({onClick,children}:{onClick?: ()=>void,children: string}) => {
  return <button className={styles.addButton} onClick={onClick}>
    <img src={plus} alt={'plus button'}/>
    <span className={styles.text}>{children.toUpperCase()}</span>
  </button>
}

export default AddButton;