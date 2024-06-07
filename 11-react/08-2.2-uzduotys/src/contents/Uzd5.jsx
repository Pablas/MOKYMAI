

const Uzd5 = () => {

    let prekes = [
        { id: 1, pavadinimas: `Tusinukas`, kaina: 2.2, kiekis: 203, nuolaida: 20},
        { id: 2, pavadinimas: `Piestukas`, kaina: 1, kiekis: 12, nuolaida: 50},
        { id: 3, pavadinimas: `Kefyras`, kaina: 1.8, kiekis: 554, nuolaida: 15},
        { id: 4, pavadinimas: `Agurkai`, kaina: 2.59, kiekis: 32, nuolaida: 15},
    ]

    const masyvas = (a) => {
        return <table border="1">
                <tr>
                    <th>Preke</th>
                    <th>Kaina</th>
                    <th>Kiekis</th>
                    <th>Nuolaida</th>
                </tr>
                            {
            a.map(x => (
                <tr key={x.id}>
                    <td>{x.pavadinimas}</td>
                    <td>{x.kaina} eur</td>
                    <td>{x.kiekis}</td>
                    <td>{x.nuolaida}%</td>
                </tr>
            ))
            }            
        </table>
    }

    return (
        <div className="block">
            {masyvas(prekes)}
        </div>
    )
}

export default Uzd5