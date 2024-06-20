import styles from './styles/PagrindinisLayout.module.css'
import { Outlet } from 'react-router-dom'
import Uzklausa from './Uzklausa'

const PagrindinisLayout = () => {



  return (
    <div>
      <div className={styles.block}>
        <Uzklausa />
      </div>

      <Outlet />
    </div>
  )
}

export default PagrindinisLayout