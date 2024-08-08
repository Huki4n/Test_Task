import React, {FC, ReactNode} from "react";
import styles from "./NavItem.module.scss"
import classNames from "classnames";

interface NavItemProps {
  children: ReactNode,
  img : string
  active: number,
  onClick: React.MouseEventHandler<HTMLLIElement>,
  id: number
}

const NavItem: FC<NavItemProps> =(
    {children,
      img,
      active,
      onClick,
      id
    }) =>
{
  return <li className={classNames(styles.navItem,active === id && styles.navItemActive)}
  onClick={onClick}>
    <img src={img} alt={''}/>
    <span>{children}</span>
  </li>
}

export default NavItem;