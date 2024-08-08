import styles from './SubListItem.module.scss'
import description from '../../../../assets/Interactions/description.svg'
import {SubList} from "../List.tsx";
import classNames from "classnames";
import {useState} from "react";
import DeleteButton from "../DeleteButton/DeleteButton.tsx";
import EditButton from "../EditButton/EditButton.tsx";

const SubListItem =
    ({subListItemProps,onToggle,isOpen,index,openEditPopup} :
         {subListItemProps: SubList,
           onToggle: () => void,
           isOpen: boolean,
           index: string
           openEditPopup: () => void,
    }) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const setFontWidth = () => {
    return (index.match(/-/gm) || []).length
  }

  return <div className={styles.item} onClick={onToggle}
              onMouseEnter={()=>setIsHover(true)}
              onMouseLeave={()=>setIsHover(false)}
  >
    <div className={styles.itemNewGap}>
      <div className={classNames((!isOpen ?
          styles.expandedPlus :
          styles.expandedMinus))}>
      </div>
      <img src={description} alt={'description'}/>
      <span className={styles.name}
            style={{fontWeight: `${600-(100*setFontWidth())}`}}>{subListItemProps.name}</span>
    </div>

    <span className={styles.num}>{subListItemProps.num}</span>
    {subListItemProps.loss && <span className={styles.loss}>Для утерь</span>}
    {subListItemProps.virtual && <span className={styles.virtual}>Виртуальная</span>}
    {subListItemProps.barcode && <span className={styles.barcode}>Без штрихкода</span>}

    {isHover && <>
      <EditButton onClick = {openEditPopup}/>
      <DeleteButton/>
    </>}
  </div>
}

export default SubListItem;