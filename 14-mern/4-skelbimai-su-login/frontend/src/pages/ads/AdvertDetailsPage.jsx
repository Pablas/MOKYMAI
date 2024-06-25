import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdvertDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [advert, setAdvert] = useState({})

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND}/ads/get/${id}`)
            .then(response => {
                // console.log(response)
                if (response.status == 200) {
                    setAdvert(response.data)
                }
            }).catch(error => {
                // console.log(error)
                navigate('/skelbimai')
            })
    }, [id, navigate])

    return (
        <div>
            <h1>Skelbimas: {advert.title}</h1>
            <p>Kaina: {advert.price} eurų</p>
            <p>Kategorija: {advert.category}</p>
        </div>
    )
}

export default AdvertDetailsPage