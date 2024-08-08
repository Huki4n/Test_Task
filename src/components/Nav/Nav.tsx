import styles from './Nav.module.scss'
import Navigation, {NavProps} from "../../constants/NavIcons/Navigation.ts";
import React, {useState} from "react";
import NavItem from "./NavItem/NavItem.tsx";
import CloseNav from "./CloseNav/CloseNav.tsx";
import classNames from "classnames";


const Nav = ({setNavItem}:{setNavItem:React.Dispatch<React.SetStateAction<number>>;}) => {
  const [active,setActive] = useState<number>(0);
  const [navClose, setNavClose] = useState<boolean>(false)

  const handleClick = (navItem: NavProps) => {
    navItem.id === active ? setActive(-1): setActive(navItem.id);
    navItem.id === active ? setNavItem(-1): setNavItem(navItem.id)
  }

  return <nav className={styles.nav}>
    <ul className={classNames(styles.navList, navClose && styles.navListHidden)}>
      {Navigation.map((navItem) => (
          <NavItem
              img={navItem.img}
              key={navItem.id}
              onClick={() => handleClick(navItem)}
              active={active}
              id={navItem.id}
          >{navItem.name}</NavItem>
      ))}
    </ul>
    <CloseNav navClose={navClose} setNavClose={setNavClose}/>
  </nav>
}

export default Nav;