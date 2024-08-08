import searchIcon from '../../../assets/SearchIcon/SearchIcon.svg'
import styles from './SearchForm.module.scss'
import CheckBox from "./CheckBox/CheckBox.tsx";

const SearchForm = () => {
  return <form className={styles.search}>
    <CheckBox>Поиск по точному вхождению</CheckBox>
    <div className={styles.searchText}>
      <img src={searchIcon} alt={'Search Icon'}/>
      <input type='text' placeholder={'Поиск'} className={styles.searchTextInput}/>
    </div>
  </form>
}
export default SearchForm;