import React, {FC, ReactNode} from "react";
import classNames from "classnames";
import styles from "./MainNavItem.module.scss";

interface MainNavItemProps {
  children: ReactNode,
  active: number,
  onClick: React.MouseEventHandler<HTMLLIElement>,
  id: number
}

const MainNavItem : FC<MainNavItemProps> = (mainNavItemProps: MainNavItemProps) => {

  return <li className={classNames(styles.navItem, mainNavItemProps.active === mainNavItemProps.id && styles.navItemActive)}
             onClick={mainNavItemProps.onClick}>
    <span>{mainNavItemProps.children}</span>
  </li>
}

export default MainNavItem;