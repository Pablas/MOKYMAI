import { useState } from "react"
import GyvunoPakeitimas from "./GyvunoPakeitimas"

const ZooSodas = () => {

    const [gyvunas, setGyvunas] = useState(`nera atsakymo`)


    return (
        <div className="blokas">
            <h2>Siandien laimingiausias gyvunas zoo sode:</h2>
            <GyvunoPakeitimas pakeistas={(gautaInfo) => setGyvunas(gautaInfo)} />
            <p>Atsakymas yra: {gyvunas}</p>
        </div>
    )
}

export default ZooSodas