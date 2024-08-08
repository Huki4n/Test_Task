import {SubList} from "../List.tsx";
import SubListItem from "../SubListItem/SubListItem.tsx";
import styles from '../List.module.scss'
import {useState} from "react";

const NestedList = ({ departments,openEditPopup }:
                        {departments: SubList[],
                        openEditPopup: () => void
                        }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (index:string) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const renderList = (items: SubList[], parentIndex = '') => {
    return <ul className={styles.listSub}>
      {items.map((item: SubList, index) => {
        const currentIndex = `${parentIndex}${index}`;
        const isOpen = openItems[currentIndex];

        return <li key={index} className={styles.list}>
            <SubListItem subListItemProps={item} onToggle={() => handleToggle(currentIndex)} isOpen={isOpen} index={currentIndex} openEditPopup={openEditPopup}/>
            {item.departments && item.departments.length > 0 && isOpen && renderList(item.departments, `${currentIndex}-`)}
          </li>
      })}
    </ul>
  };
  return <>{renderList(departments)}</>;
};

export default NestedList