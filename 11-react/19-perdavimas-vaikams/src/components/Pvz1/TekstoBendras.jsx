import TekstoVaikinis from "./TekstoVaikinis"

const TekstoBendras = () => {

    let duomenys = `Trecia eilute`
    let informacija = `Kokia nors informacija`

    return (
        <div className="blokas">
            <h2>Teksto bendras</h2>
            <TekstoVaikinis tekstas="Pirma eilute"/>
            <TekstoVaikinis tekstas="Antra eilute"/>
            <TekstoVaikinis />
            <TekstoVaikinis tekstas={duomenys}/>
            <TekstoVaikinis tekstas={informacija}/>
        </div>
    )
}

export default TekstoBendras