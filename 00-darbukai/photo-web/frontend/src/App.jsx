import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagrindinisLayout from './page-layouts/PagrindinisLayout'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import AboutMePage from './pages/AboutMePage'
import ErrorPage from './pages/ErrorPage'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PagrindinisLayout />}>
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/gallery' element={<GalleryPage />} />
                        <Route path='/about' element={<AboutMePage />} />
                        
                        <Route path='/*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
