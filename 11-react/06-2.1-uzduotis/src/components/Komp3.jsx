

const Komp3 = () => {
    let preke = {
        pavadinimas: 'Šokoladas',
        kaina: 2.5,
        kiekis: 10,
    };
    
    return (
        <div>
            <h2>{preke.pavadinimas}</h2>
            <h3>Kaina: {preke.kaina}</h3>
            <h3>Kiekis: {preke.kiekis}</h3>
        </div>
    )
}

export default Komp3
