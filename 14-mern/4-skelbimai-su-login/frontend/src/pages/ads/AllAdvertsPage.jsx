import AdsList from "../../components/AdsList"
import { useState,useEffect } from "react"
import axios from 'axios'

const AllAdvertsPage = () => {
    const [ads, setAds] = useState([

    ])

    useEffect (() => {
        axios.get(import.meta.env.VITE_BACKEND + '/ads/all')
            .then(response => {
                if (response.status === 200){
                    setAds(response.data)
                }
            }).catch(error => {
                //
            })
    }, [])

    return (
        <div>
            <h1>Skelbimai</h1>
            <p>Viskas ko galite panorėti</p>
            <AdsList data={ads} />
        </div>
    )
}

export default AllAdvertsPage
