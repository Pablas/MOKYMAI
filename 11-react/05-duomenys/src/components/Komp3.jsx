

const Komp3 = () => {

    let darbuotojas = {
        vardas : `Petras`,
        pavarde : `Petraitis`,
        pareigos : `Direktorius`,
        atlyginimas : 2000,
    }

    return (
        <div>
            <h2>Darbuotojo informacija:</h2>
            <p><strong>Vardas: </strong>{darbuotojas.vardas}</p>
            <p><strong>Vardas: </strong>{darbuotojas[`vardas`]}</p>
            <p><strong>Pavarde: </strong>{darbuotojas.pavarde}</p>
            <p><strong>Pareigos: </strong>{darbuotojas.pareigos}</p>
            <p><strong>Alga: </strong>{darbuotojas.atlyginimas}</p>
        </div>
    )
}

export default Komp3