import Logo from "../UI/Logo/Logo";
import ExitButton from "../UI/ExitButton/ExitButton.tsx";
import styles from "./Header.module.scss"

const Header = () => {
  return <header className={styles.header}>
    <Logo/>
    <ExitButton/>
  </header>
}
export default Header;