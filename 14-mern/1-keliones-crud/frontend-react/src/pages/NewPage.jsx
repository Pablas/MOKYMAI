import styles from './NewPages.module.css'

const NewPage = () => {

    const submitHandler = (event) => {
        event.preventDefault()

        ///////////////////////////////////////////////
        //SUKURTI OBJEKTA KURIS BUTU TOKS PATS KAIP SERVERI:

        // gauti is form elementus visus (+ name=`` prie kiekvieno input ideti!):
        const formData = new FormData(event.target)

        //kokia info paims is 'names=""` nuo inputu:
        let newTravel = {
            title: formData.get(`title`),
            description: formData.get('description'),
            year: parseInt(formData.get('year')) || 0, //jeigu neis iskonvertuoti i sk, tada bus 0 (kaip if)
            nights: parseInt(formData.get('nights')) || 0,
            price: parseInt(formData.get('price')) || 0
        }

        


        
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
                    <input type="number" id="nightsInput" name='nights'/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="priceInput">Kaina: </label>
                    <input type="number" id="priceInput" name='price'/>
                </div>
                <button className="btn" type="submit">Sukurti</button>
            </form>
        </div>
    )
}

export default NewPage