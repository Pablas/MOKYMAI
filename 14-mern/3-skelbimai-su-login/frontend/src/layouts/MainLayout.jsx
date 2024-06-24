import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div style={{padding: '20px 40px'}}>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout