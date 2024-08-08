import inventory from '../../assets/NavIcons/Inventory.svg'
import locations from '../../assets/NavIcons/Locations.svg'
import settings from '../../assets/NavIcons/Settings.svg'
import staffs from '../../assets/NavIcons/Staffs.svg'
import property from '../../assets/NavIcons/Property.svg'
import notifications from '../../assets/NavIcons/Notifications.svg'

export interface NavProps{
  id: number,
  img: string,
  name: string
}

const Navigation : NavProps[] = [
  {id:0, img : property, name: 'Имущество'},
  {id:1, img: inventory, name: 'Инвентаризация'},
  {id:2, img : staffs, name: 'Сотрудники'},
  {id:3, img : notifications, name: 'Уведомления'},
  {id:4, img : locations, name: 'Локации'},
  {id:5, img : settings, name: 'Настройки'}
]

export default Navigation;