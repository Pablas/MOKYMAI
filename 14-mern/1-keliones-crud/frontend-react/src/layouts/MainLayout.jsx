import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        mainpage
        <Outlet />
    </div>
  )
}

export default MainLayout