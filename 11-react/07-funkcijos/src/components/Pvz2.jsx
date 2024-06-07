


const Pvz2 = () => {

    let skaicius1 = 83;
    let skaicius2 = 26;

    const kurisDidesnis = () => {
        if (skaicius1 > skaicius2){
            return `Pirmas skaicius yra didesnis`
        } else if (skaicius1 < skaicius2) {
            return `Antras skaicius yra didesnis`
        } else {
            return `Skaiciai yra lygus`
        }
    }

    const kurisMazesnis = () => {
        if (skaicius1 < skaicius2){
            return <p>{skaicius1} yra mazesnis uz {skaicius2}</p>
        } else if (skaicius1 > skaicius2){
            return <p>{skaicius2} yra mazesnis uz {skaicius1}</p>
        } else {
            return <p>Skaiciai lygus</p>
        }
    }

    return (
        <div className="blokas">
            <h2>Pvz2</h2>
            <p>Turimi skaiciai: { skaicius1 } ir { skaicius2 }</p>
            <p>{ kurisDidesnis() }</p>
            {kurisMazesnis()}
        </div>
    )
}

export default Pvz2