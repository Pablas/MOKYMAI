import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom' //prideti sita reikia.

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import NewsPage from './pages/NewsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about-us' element={<AboutUsPage />} />
                    <Route path='/services' element={<ServicesPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='*' element={<NotFoundPage />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
