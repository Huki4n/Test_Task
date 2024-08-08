import styles from "./CheckBox.module.scss";
import React, {FC} from "react";

interface CheckBox {
  children?: React.ReactNode | 'unknown',
}

const CheckBox: FC<CheckBox>= ({children}) => {

  return <>
    <input type="checkbox" className={styles.checkboxInput}/>
    {children}
  </>
}
export default CheckBox;