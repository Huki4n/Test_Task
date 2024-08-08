import logo from '../../../assets/Logo/Logo.svg'
import logoVersion from '../../../assets/Logo/LogoVersion.svg'
import styles from './Logo.module.scss'

const Logo = () => {
  return <div className={styles.logo}>
    <img src={logo} alt={'Logo'} className={styles.logoImage}/>
    <img src={logoVersion} alt={'Logo Version'} className={styles.logoImageVersion}/>
  </div>
};

export default Logo;