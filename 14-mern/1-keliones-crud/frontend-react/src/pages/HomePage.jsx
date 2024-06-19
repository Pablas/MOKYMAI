import styles from './HomePage.module.css'
//uzklausa i backend (kad gauti info){ useEffect }:
import { useEffect, useState } from "react"


const HomePage = () => {

    const [travels, setTravels] = useState([])

    useEffect(() => {
        // console.log('komponentas uzsikrove') - prasitestavimas.
        fetch('http://localhost:8675/travels')
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
                            <h3>{travel.title}</h3>
                            <p>{travel.description}</p>
                            <p><strong>Metai:</strong> {travel.year}</p>
                            <p><strong>Kiek naktu:</strong> {travel.nights}</p>
                            <p><strong>Kaina:</strong> {travel.price} euru</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage