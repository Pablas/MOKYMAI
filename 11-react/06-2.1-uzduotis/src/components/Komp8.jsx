


const Komp8 = () => {

    let salys = [
        { pavadinimas: `Lietuva`, sostine: `Vilnius`, gyventojai: 2862380},
        { pavadinimas: `Latvija`, sostine: `Riga`, gyventojai: 1907675},
        { pavadinimas: `Estija`, sostine: `Talinas`, gyventojai: 1328439},
        { pavadinimas: `Lenkija`, sostine: `Varsuva`, gyventojai: 39100400},
    ]

    return (
        <div>
            {
                salys.map((x, i) => (
                    <div key={i}>
                        <h2>{x.pavadinimas}</h2>
                        <h3>Sostinė: {x.sostine}</h3>
                        <p>{x.pavadinimas} turi {x.gyventojai} gyventojų.</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Komp8
