import { useEffect, useState } from "react" // kad useEffect veiktu ir useState
import { useNavigate } from "react-router-dom" // kad galetume nureroutinti i kita vieta
import { useParams } from "react-router-dom" //kad pagal id galetu ieiti i sita puslapi, ima pavadinimo gala (ne failo id), LINKO GALA IMA!!! (is Route /:id - sitas naudojamas cia)

////////////////////////////////////
// KIEKVIENO IRASO DETALUS PUSLAPIS:

// Gaunam info is serverio (ka galesim atvaizduoti) ir kad adresas butu iraso ID:

const DetailPage = () => {

    const navigate = useNavigate() // kad reroutintume zmogu i kita page
    const { id } = useParams()

    const [travel, setTravel] = useState({}) //kintamasis kuriame saugoti info kuria gausim is serverio

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + `/travels/` + id) // kur kreipsis
            .then(response => response.json()) // is js i .json issivede
            .then(data => { //data - informacija is serverio gaunama
                setTravel(data) // i travel irasom gauta informacija is serverio "data"
            })
    }, [id])



    //mygtukas kuris deletins irasa:
    const deleteHandler = () => {
        //duos lentele ar trynti, ir jei true issives, jei spaus no, tada nesuveiks if'as:
        if (confirm(`Ar tikrai norite trinti "${travel?.title}"?`)) {
            //env - kur yra nuoroda, id - gaunam is serverio info (puslapio adreso galas):
            //BACKEND reaguos i sita nurodo kaip route, ir reaguos:
            //linkas ir metodas ka darys:
            fetch(`${import.meta.env.VITE_BACKEND_URL}/travels/${id}`, { method: `DELETE`})
                .then(response => response.json()) //responsa i .json konvertuojam (serverio kalba)

                //po trinimo koks veiksmas bus (cia nukreipiam i "/" page):
                //reikia import ir const funkcija nusistatyt!!!
                .then(() => navigate(`/`)) 

        }
    }


    return ( // ? - jeigu yra tas duomenis, o jei ne neisves nieko (saugiau, nemes klaidu jeigu nebus)
        <div>
            <h1>Kelione: {travel?.title}</h1>
            <p>Aprasymas: {travel?.description}</p>
            <p>Metai: {travel?.year}</p>
            <p>Naktys: {travel?.nights}</p>
            <p>Kaina: {travel?.price} eur.</p>
            <p>
                <button onClick={deleteHandler} className="btn btn-red">Trinti</button>
            </p>
        </div>
    )
}

export default DetailPage