

const Komp2 = () => {

    let vardai = [`Tomas`, `Petras`, `Ona`, `Gintare`, `Aukse`]

    return (
        <div>
            <h2>Vardai masyvas</h2>
            <p><strong>Vardai: </strong>{vardai.join(`, `)}</p>
            <p><strong>Pirmas vardas: </strong>{vardai[0]}</p>
            <p><strong>Antras vardas: </strong>{vardai[1]}</p>
            <p><strong>Paskutinis: </strong>{vardai.slice(-1)}</p>
            <p><strong>Kiekis: </strong>{vardai.length}</p>
        </div>
    )
}

export default Komp2