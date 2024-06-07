

const Komp9 = () => {

    let prekes = [
        { id: 1, pavadinimas: `Tusinukas`, kaina: 2.5, kiekis: 279 },
        { id: 2, pavadinimas: `Piestukas`, kaina: 1.5, kiekis: 123 },
        { id: 3, pavadinimas: `Flomasteriai`, kaina: 5, kiekis: 53 },
        { id: 4, pavadinimas: `Sasiuvinys`, kaina: 2, kiekis: 23 },
    ]

    return (
        <div className="prekiu-blokas">
            <h2>Prekes sandelyje:</h2>
            <div className="prekiu-sarasas">

                {
                    prekes.map(x => (
                        <div key={x.id} className="preke">
                            <h3>{x.pavadinimas}</h3>
                            <p>Kaina: {x.kaina}</p>
                            <p>Kiekis: {x.kiekis}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Komp9