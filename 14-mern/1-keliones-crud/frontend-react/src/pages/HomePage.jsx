import styles from './HomePage.module.css'
//uzklausa i backend (kad gauti info){ useEffect }:
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom' //kad veiktu <Link> komanda

const HomePage = () => {

    const [travels, setTravels] = useState([])

    useEffect(() => {
        // console.log('komponentas uzsikrove') - prasitestavimas.
        fetch(import.meta.env.VITE_BACKEND_URL + '/travels') //adresas backendo, bet dabar kadangi ideta i .env faila, galima daryti sitaip, ir tik ten pakeitus, veiks visad.
            .then(response => response.json()) //i json, javascripta mano info persirase
            .then(data => { //data ir yra masyvas su duomenimis (galima uzvadinti kaip norima)
                // console.log(data) - pasitikrinti pries, kokius gaunam duomenis
                setTravels(data) //isistatom duomenis i travels, masyva, bet rasyti viduje po visko, nes turim palaukti kol gaus visa informacija.
            })
    }, [])

    return (
        <div>
            <h1>Keliones</h1>
            <div className={styles.travels_list}>
                {
                    travels.map(travel => (
                        <div key={travel._id} className={styles.travel_box}>
                            <h3> 
                                <Link to={"/kelione/" + travel._id}>{travel.title}</Link>
                            </h3>
                            <p>{travel.description}</p>
                            <p><strong>Metai:</strong> {travel.year}</p>
                            <p><strong>Kiek naktu:</strong> {travel.nights}</p>
                            <p><strong>Kaina:</strong> {travel.price} euru</p>
                            <p>
                                <Link to={"/kelione/" + travel._id} className='btn'>Placiau</Link>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage