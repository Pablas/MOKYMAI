import { useState } from "react"
import AdsList from "../../components/AdsList"

const MyAdvertsPage = () => {
    const [ads, setAds] = useState([
        { _id: 2, title: 'parduodu kede', price: 30, category: 'Baldai' },
        { _id: 3, title: 'ieskau dviracio', price: 200, category: 'Pramogos' },
    ])

    return (
        <div>
            <h1>Mano skelbimai</h1>
            <p>Mano sukurti skelbimai</p>
            <AdsList data={ads} />
        </div>
    )
}

export default MyAdvertsPage
