import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagrindinisLayout from './page-layouts/PagrindinisLayout'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import AboutMePage from './pages/AboutMePage'
import ErrorPage from './pages/ErrorPage'
import ErrorLayout from './page-layouts/ErrorLayout'

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PagrindinisLayout />}>
                        <Route path='/home' element={<HomePage />} />
                        <Route path='/gallery' element={<GalleryPage />} />
                        <Route path='/about' element={<AboutMePage />} />
                    </Route>
                    <Route path='/' element={<ErrorLayout />}>
                        <Route path='/*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
