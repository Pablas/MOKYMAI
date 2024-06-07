

const Komp4 = () => {
    let filmas = {
        pavadinimas: 'Pulp Fiction',
        rezisierius: 'Quentin Tarantino',
        metai: 1994,
    };

    return (
        <div>
            <h2>Filmas: {filmas.pavadinimas}</h2>
            <h3>Režisierius: {filmas.rezisierius}</h3>
            <h3>{filmas.metai} metų filmas.</h3>
        </div>
    )
}

export default Komp4
