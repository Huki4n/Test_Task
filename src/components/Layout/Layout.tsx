import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import React, {FC} from "react";
import Nav from "../Nav/Nav.tsx";
import styles from "../Main/Main.module.scss";

interface LayoutProps {
  children: React.ReactNode,
  setNavItem: React.Dispatch<React.SetStateAction<number>>,
  navItem: number
}

const Layout: FC<LayoutProps> = ({children,setNavItem,navItem}) => {
  return <>
    <Header/>
    <Nav setNavItem={setNavItem}/>
    <main className={styles.main}>{children}</main>
    <Footer navItem={navItem}/>
  </>
}

export default Layout;