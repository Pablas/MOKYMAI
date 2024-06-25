import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const Navbar = () => {

    const isAuthenticated = useIsAuthenticated()
    const signOut = useSignOut()

    const navigate = useNavigate()

    const onSignOutHandler = () => {
        signOut()
        navigate('/prisijungti')
    }



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
                {
                    isAuthenticated &&
                    <li>
                        <NavLink end to='/skelbimai/mano' className={(navData) => navData.isActive ? styles.active_link : ''}>
                            Mano skelbimai
                        </NavLink>
                    </li>
                }
                {
                    isAuthenticated && <li>
                        <NavLink end to='/skelbimai/naujas' className={(navData) => navData.isActive ? styles.active_link : ''}>
                            Naujas skelbimas
                        </NavLink>
                    </li>
                }

            </ul>
            <ul className={styles.list}>
                {
                    !isAuthenticated &&
                    <>
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
                    </>
                }
                {
                    isAuthenticated &&
                    <li>
                        <button onClick={onSignOutHandler}>Atsijungti</button>
                    </li>
                }

            </ul>
        </nav>
    )
}

export default Navbar
