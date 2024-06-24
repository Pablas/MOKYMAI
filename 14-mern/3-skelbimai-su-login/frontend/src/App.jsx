import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import AllAdvertsPage from "./pages/ads/AllAdvertsPage"
import NewAdvertPage from "./pages/ads/NewAdvertPage"
import AdvertDetailsPage from "./pages/ads/AdvertDetailsPage"
import MyAdvertsPage from "./pages/ads/MyAdvertsPage"

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/registruotis" element={<RegisterPage />} />
                        <Route path="/prisijungti" element={<LoginPage />} />     
                        <Route path="/skelbimai" element={<AllAdvertsPage />} /> 
                        <Route path="/skelbimai/mano" element={<MyAdvertsPage />} />   
                        <Route path="/skelbimai/naujas" element={<NewAdvertPage />} />          
                        <Route path="/skelbimai/:id" element={<AdvertDetailsPage />} />        
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
