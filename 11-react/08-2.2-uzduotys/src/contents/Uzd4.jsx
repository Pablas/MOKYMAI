

const Uzd4 = () => {

    let darbuotojas = [
        { vardas: `Tomas`, profesija: `Programuotojas`, atlyginimas: 2000, etatas: `puse`, stazas: 4 },
        { vardas: `Aukse`, profesija: `Buhaltere`, atlyginimas: 4000, etatas: `pilnu`, stazas: 1 },
        { vardas: `Tadas`, profesija: `Konditeris`, atlyginimas: 8000, etatas: `puse`, stazas: 10 },
    ]

    const kiekUzdirbo = (d) => {
        return (d.stazas * 12) * d.atlyginimas
    }

    const ilgametisDarbuotojas = (d) => {
        if (d >= 5){
            return `ilgametis`
        } 

        return `naujokas`
    }

    return (
        <div className="block">
            {
                darbuotojas.map((x, i) =>
                    <div>
                        <p key={i}>{x.profesija} {x.vardas}, dirbantis {x.etatas} etatu, uzdirba {x.atlyginimas}, o stazas {x.stazas} metai.</p>
                        <p>Sis darbuotojas uzdirbo {kiekUzdirbo(x)} eur.</p>
                        <p>Sis darbuotojas pagal staza yra: <strong>{ilgametisDarbuotojas(x.stazas)}</strong> darbuotojas.</p>
                        <br></br>
                    </div>
                )
            }


        </div>
    )
}

export default Uzd4