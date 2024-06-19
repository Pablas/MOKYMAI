import { Outlet } from 'react-router-dom'
import { Link, NavLink } from 'react-router-dom'
import styles from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <Link to="/">Keliones</Link>
                </div>
                <ul className={styles.links}>
                    <li><NavLink to="/">Pradzia</NavLink></li>
                    <li><NavLink to="/sukurti">Sukurti nauja</NavLink></li>
                </ul>
            </nav>
            <div className={styles.content}>
                <Outlet />
            </div>



        </div>
    )
}

export default MainLayout