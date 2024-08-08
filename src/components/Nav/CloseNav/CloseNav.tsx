import styles from './CloseNav.module.scss'
import corner from '../../../assets/Interactions/Сorner.svg'
import classNames from "classnames";
import React, {FC} from 'react';

interface CloseNavProps {
  setNavClose:  React.Dispatch<React.SetStateAction<boolean>>
  navClose: boolean
}

const CloseNav: FC<CloseNavProps> = ({setNavClose, navClose}) => {


  const closeNavClick = () => {
    if (!navClose){
      setNavClose(true)
    } else {
      setNavClose(false)
    }
  }

  return <div className={styles.closeNavButton}>
    <div className={classNames(navClose && styles.imgHidden,styles.pointer,styles.img)} onClick={closeNavClick}>
      <img src={corner} alt=""/>
    </div>
    <div onClick={closeNavClick}>
      <span className={classNames(styles.text,styles.pointer)}>Скрыть меню</span>
    </div>
    <div className={classNames(styles.cornerRotate, !navClose && styles.imgHidden,styles.pointer,styles.img)} onClick={closeNavClick}>
      <img src={corner} alt="" />
    </div>
  </div>
}
export default CloseNav;