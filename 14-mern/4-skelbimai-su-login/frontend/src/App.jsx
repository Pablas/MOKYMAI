import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AllAdvertsPage from './pages/ads/AllAdvertsPage'
import MyAdvertsPage from "./pages/ads/MyAdvertsPage"
import NewAdvertPage from "./pages/ads/NewAdvertPage"
import AdvertDetailsPage from "./pages/ads/AdvertDetailsPage"
import createStore from 'react-auth-kit/createStore'
import AuthProvider from 'react-auth-kit'
import AuthOutlet from '@auth-kit/react-router/AuthOutlet'

function App() {

    const store = createStore({
        authName: '_auth',
        authType: 'cookie',
        cookieDomain: window.location.hostname,
        cookieSecure: false,
    })

    return (
        <>
            <AuthProvider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<MainLayout />}>
                            <Route path='/' element={<HomePage />} />
                            <Route path='/registruotis' element={<RegisterPage />} />
                            <Route path='/prisijungti' element={<LoginPage />} />
                            <Route path='/skelbimai' element={<AllAdvertsPage />} />
                            <Route element={<AuthOutlet fallbackPath='/prisijungti' />}>
                                <Route path='/skelbimai/mano' element={<MyAdvertsPage />} />
                                <Route path='/skelbimai/naujas' element={<NewAdvertPage />} />
                            </Route>
                            <Route path='/skelbimai/:id' element={<AdvertDetailsPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default App
