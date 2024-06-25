import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <Link to='/'>Skelbimuks</Link>
            </div>
            <ul className={styles.list + ' ' + styles.list_middle}>
                <li>
                    <NavLink end to='/skelbimai' className={(navData) => navData.isActive ? styles.active_link : ''}>
                        Skelbimai
                    </NavLink>
                </li>
                <li>
                    <NavLink end to='/skelbimai/mano' className={(navData) => navData.isActive ? styles.active_link : ''}>
                        Mano skelbimai
                    </NavLink>
                </li>
                <li>
                    <NavLink end to='/skelbimai/naujas' className={(navData) => navData.isActive ? styles.active_link : ''}>
                        Naujas skelbimas
                    </NavLink>
                </li>
            </ul>
            <ul className={styles.list}>
                <li>
                    <NavLink to='/registruotis' className={(navData) => navData.isActive ? styles.active_link : ''}>
                        Registruotis
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/prisijungti' className={(navData) => navData.isActive ? styles.active_link : ''}>
                        Prisijungti
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
