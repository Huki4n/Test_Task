import MainNav from "./MainNav/MainNav.tsx";
import Path from "./Path/Path.tsx";
import styles from "./Main.module.scss"
import SyncButton from "./SyncButton/SyncButton.tsx";
import SearchForm from "./SearchForm/SearchForm.tsx";
import List from "./List/List.tsx";
import {useState} from "react";
import EditPopup from "../Popups/EditPopup/EditPopup.tsx";
import CreatePopup from "../Popups/CreatePopup/CreatePopup.tsx";
import Table from "./Table/Table.tsx";
import AddButton from "./AddButton/AddButton.tsx";

const Main = ({navItem}:{navItem: number}) => {
  const [showEditPopup,setShowEditPopup] = useState<boolean>(false);
  const [showCreatePopup,setShowCreatePopup] = useState<boolean>(false);

  const navItemDataLoc = [
    {id: 0, name: 'Все локации'},
    {id: 1, name: 'Импорт/Экспорт'},
    {id: 2, name: 'Настройки'}
  ]
  const navItemDataSetting = [
    {id: 0, name: 'Имущество'},
    {id: 1, name: 'Инвентаризация'},
    {id: 2, name: 'Сотрудники'},
    {id: 3, name: 'Локации'},
    {id: 4, name: 'Уведомления'},
    {id: 6, name: 'Справочники'},
    {id: 7, name: 'Пользователь'},
  ]

  const openEditPopup = () => {
    if (!showEditPopup){
      setShowEditPopup(true);
    }
  }
  const closeEditPopup = () => {
    if (showEditPopup){
      setShowEditPopup(false);
    }
  }
  const openCreatePopup = () => {
    if (!showCreatePopup){
      setShowCreatePopup(true);
    }
  }
  const closeCreatePopup = () => {
    if (showCreatePopup){
      setShowCreatePopup(false);
    }
  }
  return <>
    {navItem === 4 && <>
      <Path>Локации / Все локации</Path>
      <div className={styles.mainUpper}>
        <MainNav navItemData={navItemDataLoc}/>
        <SyncButton/>
      </div>
      <div className={styles.mainSettings}>
        <AddButton onClick={openCreatePopup}>Создать локацию</AddButton>
        <SearchForm/>
      </div>
      <List openEditPopup={openEditPopup}/>
      {showEditPopup && <EditPopup onClick={closeEditPopup}/>}
      {showCreatePopup && <CreatePopup onClick={closeCreatePopup}/>}
    </>}

    {navItem === 5 && <>
      <Path>Настройки / Все локации</Path>
      <div className={styles.mainUpper}>
        <MainNav navItemData={navItemDataSetting}/>
      </div>
      <h2 className={styles.mainText}>Настройка полей таблицы</h2>
      <Table/>
      <AddButton>Добавить поле</AddButton>
    </>}
  </>
}

export default Main;