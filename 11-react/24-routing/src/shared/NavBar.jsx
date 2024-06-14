import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={styles.nav}>
        <div className={`container ${styles.nav_container}`}>
            <div className={styles.brand}>
                <NavLink to="/">Projekto pavadinimas</NavLink>
            </div>
            <ul className={styles.links}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">About us</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar