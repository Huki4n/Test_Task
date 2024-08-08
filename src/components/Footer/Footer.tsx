import styles from './Footer.module.scss'
import DocLink from "../UI/DocLink/DocLink.tsx";
import SaveButton from "../Buttons/SaveButton.tsx";
import CancelButton from "../Buttons/CancelButton.tsx";

const Footer = ({navItem}:{navItem:number}) => {
  return <footer className={styles.footer}>
    {navItem === 4 && <div className={styles.textBlock}>
      <span className={styles.text}>Последний приём 20.09.2021 18:36:21</span>
      <span className={styles.text}>Последняя передача  20.09.2021 18:38:21</span>
    </div>}
    {navItem === 5 && <div className={styles.buttons}>
      <SaveButton/>
      <CancelButton/>
    </div>}
    <DocLink/>
  </footer>
}

export default Footer;