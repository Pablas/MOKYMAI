import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewAdvertPage = () => {
    const [errors, setErrors] = useState([])

    const errorStyle = {
        color: 'red',
        fontSize: '14px',
        margin: 0
    }

    const authHeader = useAuthHeader()

    const navigate = useNavigate()

    const onSubmitFormHander = (event) => {
        event.preventDefault()

        let newAd = {
            title: event.target.title.value,
            price: event.target.price.valueAsNumber,
            category: event.target.category.value
        }
        // console.log(newAd)

        axios.post(import.meta.env.VITE_BACKEND + '/ads/create', newAd, {
            headers: { 'Authorization' : authHeader }
        }).then(response => {
            // console.log(response)

            if (response.status == 201) {
                navigate('/skelbimai/' + response.data._id)
            }
        }).catch(error => {
            // console.error(error)
            // console.log(error.response.data)
            setErrors(error.response.data)
        })
    }

    return (
        <div>
            <h1>Sukurti naują skelbimą</h1>
            <p>Norėdami sukurti naują skelbimą surašykite visą informaciją apie jį</p>

            <form onSubmit={onSubmitFormHander}>
                <div>
                    <label htmlFor="titleInput">Skelbimo pavadinimas:</label>
                    <input type="text" id="titleInput" name="title" />
                    {
                        errors.filter(err => err.type === 'title').map(err => (
                            <p style={errorStyle} key={err.message}>{err.message}</p>
                        ))
                    }
                </div>
                <div>
                    <label htmlFor="priceInput">Kaina:</label>
                    <input type="number" id="priceInput" name="price" />
                    {
                        errors.filter(err => err.type === 'price').map(err => (
                            <p style={errorStyle} key={err.message}>{err.message}</p>
                        ))
                    }
                </div>
                <div>
                    <label htmlFor="categoryInput">Kategorija:</label>
                    <select name="category" id="categoryInput">
                        <option value=""></option>
                        <option value="Baldai">Baldai</option>
                        <option value="Pramogos">Pramogos</option>
                        <option value="Paslaugos">Paslaugos</option>
                        <option value="Kita">Kita</option>
                    </select>
                    {
                        errors.filter(err => err.type === 'category').map(err => (
                            <p style={errorStyle} key={err.message}>{err.message}</p>
                        ))
                    }
                </div>
                <div>
                    <button type="submit">Sukurti</button>
                </div>
            </form>
        </div>
    )
}

export default NewAdvertPage