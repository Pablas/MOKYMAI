

const Komp4 = () => {

    let automobilis = {
        marke: `Audi`,
        modelis: `A4`,
        metai: 2010,
        kaina: 8000,
        rida: 200000,
    }

    return (
        <div>
            <h2>Automobilis {automobilis.marke} {automobilis.modelis}</h2>
            <p>Yra {automobilis.metai} metu gamybos</p>
            <p>Kainuoja {automobilis.kaina} euru.</p>
            <p>Nuvaziaves {automobilis.rida} km.</p>
        </div>
    )
}

export default Komp4