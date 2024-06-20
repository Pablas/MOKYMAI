import { useEffect, useState } from "react" // kad useEffect veiktu ir useState
import { useParams } from "react-router-dom" //kad pagal id galetu ieiti i sita puslapi, ima pavadinimo gala (ne failo id), LINKO GALA IMA!!! (is Route /:id - sitas naudojamas cia)


const DetailPage = () => {

    const { id } = useParams()

    const [travel, setTravel] = useState({}) //kintamasis kuriame saugoti info kuria gausim is serverio

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + `/travels/` + id) // kur kreipsis
            .then(response => response.json()) // is js i .json issivede
            .then(data => { //data - informacija is serverio gaunama
                setTravel(data) // i travel irasom gauta informacija is serverio "data"
            })
    }, [id])


    return ( // ? - jeigu yra tas duomenis, o jei ne neisves nieko (saugiau, nemes klaidu jeigu nebus)
        <div>
            <h1>Kelione: {travel?.title}</h1>
            <p>Aprasymas: {travel?.description}</p>
            <p>Metai: {travel?.year}</p>
            <p>Naktys: {travel?.nights}</p>
            <p>Kaina: {travel?.price} eur.</p>
        </div>
    )
}

export default DetailPage