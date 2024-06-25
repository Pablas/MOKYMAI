import { useState, useEffect } from "react"
import AdsList from "../../components/AdsList"
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import axios from 'axios'

const MyAdvertsPage = () => {
    const authHeader = useAuthHeader()

    const [ads, setAds] = useState([
        // { _id: 2, title: 'parduodu kede', price: 30, category: 'Baldai' },
        // { _id: 3, title: 'ieskau dviracio', price: 200, category: 'Pramogos' },
    ])

    // axios.get(nuoroda)
    // axios.get(nuoroda, nustatymai) - nustatymai yra optional

    // axios.post(nuoroda, duomenys)
    // axios.post(nuoroda, duomenys, nustatymai) - nustatymai yra optional

    useEffect(() => {
        axios.get(import.meta.env.VITE_BACKEND + '/ads/all-current-user', {
            headers: { 'Authorization': authHeader }
        }).then(response => {
            // console.log(response)

            if (response.status == 200) {
                setAds(response.data)
            }
        }).catch(() => console.log('Klaida kraunant skelbimus'))
    }, [authHeader])

    return (
        <div>
            <h1>Mano skelbimai</h1>
            {/* {authHeader} */}
            <p>Mano sukurti skelbimai</p>
            <AdsList data={ads} />
        </div>
    )
}

export default MyAdvertsPage