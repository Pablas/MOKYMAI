import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import NewPage from './pages/NewPage'
import EditPage from './pages/EditPage'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/sukurti' element={<NewPage />} />
                        <Route path='/kelione/:id' element={<DetailPage />} />
                        <Route path='/atnaujinti/:id' element={<EditPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
