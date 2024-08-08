import styles from './MainNav.module.scss'
import MainNavItem from "./MainNavItem/MainNavItem.tsx";
import {useState} from "react";

const MainNav = ( {navItemData} : {navItemData : {id:number,name: string}[]} ) => {

  const [active,setActive] = useState<number>(0);

  return <nav>
    <ul className={styles.navList}>
      {navItemData.map((navItem) => (
          <MainNavItem
              key={navItem.id}
              id={navItem.id}
              onClick={() => {
                navItem.id === active ? setActive(-1) : setActive(navItem.id)}
              }
              active={active}
          >{navItem.name}</MainNavItem>
      ))}
    </ul>
  </nav>
}

export default MainNav;