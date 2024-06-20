import styles from './NewPages.module.css'
import { useNavigate } from 'react-router-dom' //kad galetume naviguoti i kita puslapi vartotoja po veiksmo

const NewPage = () => {

    const navigate = useNavigate()

    const submitHandler = (event) => {
        event.preventDefault()

        ///////////////////////////////////////////////
        //SUKURTI OBJEKTA KURIS BUTU TOKS PATS KAIP SERVERI:

        // gauti is form elementus visus (+ name=`` prie kiekvieno input ideti!):
        const formData = new FormData(event.target)

        //kokia info paims is 'names=""` nuo inputu (req.body bus server.js):
        let newTravel = {
            title: formData.get(`title`),
            description: formData.get('description'),
            year: parseInt(formData.get('year')) || 0, //jeigu neis iskonvertuoti i sk, tada bus 0 (kaip if)
            nights: parseInt(formData.get('nights')) || 0,
            price: parseInt(formData.get('price')) || 0
        }

        //////////////////////////////////////////////
        //ISSIUSTI OBJEKTA I BACKEND:
        fetch(import.meta.env.VITE_BACKEND_URL + `/travels`, { //kur kreipiames ENDPOINTAS.
            method: `POST`, //POST budu kreipiuosi,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTravel) //newTravel (objekta kuri susikureme) ^^ konvertuojam js i JSON nurodyti
        })
            .then(response => {
                //console.log(response) - pasitikrinti koki response gaunam.
                //status galima matyt koki serveris atiduoda ir tuomet ji ideti if'us pagal status:
                if (response.status === 201) { //serverija parasyti su kokiu kodu vykdo gavimo komanda
                    return response.json()
                }
            }).then(data => { //jeigu gaunam ta koda ^, tada darom veiksma:
                // console.log(data) - parodo kokia info irase consoleje
                navigate(`/kelione/` + data._id) //kai prides duomenis numes vartotoja i kur nurodysim kad mestu, numes i _id adresa (naujai sukurta page DetailPage.jsx)
            })

    }

    return (
        <div>
            <h1>Nauja kelione</h1>
            <p>Kur keliausim? Arba kur buvome?</p>
            <form onSubmit={submitHandler} className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="titleInput">Pavadinimas: </label>
                    <input type="text" id="titleInput" name='title' />
                </div>
                <div className={styles.group}>
                    <label htmlFor="descriptionInput">Aprasymas: </label>
                    <textarea type="text" id="descriptionInput" name='description'></textarea>
                </div>
                <div className={styles.group}>
                    <label htmlFor="yearInput">Metai: </label>
                    <input type="number" id="yearInput" name='year' />
                </div>
                <div className={styles.group}>
                    <label htmlFor="nightsInput">Naktys: </label>
                    <input type="number" id="nightsInput" name='nights' />
                </div>
                <div className={styles.group}>
                    <label htmlFor="priceInput">Kaina: </label>
                    <input type="number" id="priceInput" name='price' />
                </div>
                <button className="btn" type="submit">Sukurti</button>
            </form>
        </div>
    )
}

export default NewPage