import docLink from '../../../assets/DocLink/DocLink.svg'
import styles from './DocLink.module.scss'

const DocLink = () => {
  return <div className={styles.docLink}>
    <img src={docLink} alt={'Documentation Link'}/>
    <a className={styles.link}>Документация</a>
  </div>
}

export default DocLink;
