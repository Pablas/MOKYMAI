import styles from './NewPages.module.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


const EditPage = () => {

    //galetume naviguoti kitur:
    const navigate = useNavigate()

    ///////////////////////////////////////////////////
    // NUKOPINAME IS DetailsPage.jsx KODA IS KUR GAUNAM INFO IR PAREDAGUOJAM:
    const { id } = useParams()

    const [travel, setTravel] = useState({})

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + `/travels/` + id) // i kur kreipiames, gauti info:
            .then(response => response.json()) //gaunam json info
            .then(data => { // idedam i "data" info kuria gavom
                setTravel(data)
            })
    }, [id])
    ///////////////////////////////////////////////////




    ///////////////////////////////////////////////////
    // SUBMITINIMAS FORMOS (ATNAUJINIMAS INFORMACIJOS):
    const submitHandler = (event) => {
        event.preventDefault()

        // is NewPage.jsx ISSIUNTIMO FUNKCIJA nukopijuota, TOKIA PATI, tik pakeisti keleta info, pvz method ir pavadinimai:

        const formData = new FormData(event.target)

        let updateTravel = {
            title: formData.get(`title`),
            description: formData.get('description'),
            year: parseInt(formData.get('year')) || 0, //jeigu neis iskonvertuoti i sk, tada bus 0 (kaip if)
            nights: parseInt(formData.get('nights')) || 0,
            price: parseInt(formData.get('price')) || 0
        }

        fetch(import.meta.env.VITE_BACKEND_URL + `/travels/` + id, {
            method: `PUT`, //PUT budu kreipiuosi,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateTravel)
        })
            .then(response => {
                if (response.status === 200) {
                    //jei response kodas 200, tada ir ivykdom ir duodam serveriui json perdaryta faila
                    return response.json()
                }
            })
            // ir viska atnaujinus grazins i keliones puslapi:
            .then(() => {
                navigate('/kelione/' + id)
            })
        ///////////////////////////////////////////////////
    }

    return (
        <div>
            <h1>Atnaujinti kelione: {travel?.title}</h1>

            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="titleInput">Pavadinimas: </label>
                    <input type="text" id="titleInput" name='title' defaultValue={travel?.title} />
                </div>
                <div className={styles.group}>
                    <label htmlFor="descriptionInput">Aprasymas: </label>
                    <textarea type="text" id="descriptionInput" name='description' defaultValue={travel?.description}></textarea>
                </div>
                <div className={styles.group}>
                    <label htmlFor="yearInput">Metai: </label>
                    <input type="number" id="yearInput" name='year' defaultValue={travel?.year} />
                </div>
                <div className={styles.group}>
                    <label htmlFor="nightsInput">Naktys: </label>
                    <input type="number" id="nightsInput" name='nights' defaultValue={travel?.nights} />
                </div>
                <div className={styles.group}>
                    <label htmlFor="priceInput">Kaina: </label>
                    <input type="number" id="priceInput" name='price' defaultValue={travel?.price} />
                </div>
                <button className="btn" type="submit">Atnaujinti</button>
            </form>

        </div>
    )
}

export default EditPage