import styles from './NewPages.module.css'

const NewPage = () => {



    return (
        <div>
            <h1>Nauja kelione</h1>
            <p>Kur keliausim? Arba kur buvome?</p>
            <form className={styles.form}>
                <div className={styles.group}>
                    <label htmlFor="titleInput">Pavadinimas: </label>
                    <input type="text" id="titleInput" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="descriptionInput">Aprasymas: </label>
                    <textarea type="text" id="descriptionInput"></textarea>
                </div>
                <div className={styles.group}>
                    <label htmlFor="yearInput">Metai: </label>
                    <input type="number" id="yearInput" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="nightsInput">Naktys: </label>
                    <input type="number" id="nightsInput" />
                </div>
                <div className={styles.group}>
                    <label htmlFor="priceInput">Kaina: </label>
                    <input type="number" id="priceInput" />
                </div>
                <button className="btn" type="submit">Sukurti</button>
            </form>
        </div>
    )
}

export default NewPage