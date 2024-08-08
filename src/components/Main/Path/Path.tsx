import styles from './Path.module.scss'
import {FC, PropsWithChildren} from "react";

const Path : FC<PropsWithChildren> = ({children}) => {
  return <div>
    <span className={styles.text}>{children}</span>
  </div>
}

export default Path;