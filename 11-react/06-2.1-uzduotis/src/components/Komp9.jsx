

const Komp9 = () => {

    let mokymai = [
        { pavadinimas: `LEGO figureliu dizaineris`, trukme: `2 metai`, kaina: 3000 },
        { pavadinimas: `LEGO montuotojas / surinkejas`, trukme: `3.5 metu`, kaina: 5000 },
        { pavadinimas: `LEGO pardavejas`, trukme: `3 menesiai`, kaina: 699 },
    ]

    let suma = 0;
    for (const x of mokymai) {
        suma += x.kaina;
    }   

    return (
        <div>
            <h2>LEGO KURSAI SIULO:</h2>
            {
                mokymai.map((x, i) => (
                    <div key={i}>
                        <h3>{i + 1}. {x.pavadinimas}</h3>
                        <p><strong>Trukme: </strong>{x.trukme}</p>
                        <p><strong>Kaina: </strong>{x.kaina}</p>
                    </div>
                ))
            }
            <h3>Norint visko ismokti, kaina: {suma}</h3>
        </div>
    )
}

export default Komp9
