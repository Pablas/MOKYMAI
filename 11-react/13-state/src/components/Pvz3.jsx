import { useState } from "react"

const Pvz3 = () => {

    const [pasirinkimas, setPasirinkimas] = useState(`----`)

    const kavaHandler = () => {
        setPasirinkimas(`Kava`);
    }

    const arbataHandler = () => {
        setPasirinkimas(`Arbata`)
    }

    const vanduoHandler = () => {
        setPasirinkimas(`Vanduo`)
    }

    const niekoHandler = () => {
        setPasirinkimas(`Nieko`)
    }
     

    return (
        <div className="blokas">
            <h2>Ka ryte geriate?</h2>
            <button onClick={kavaHandler}>Kava</button>
            <button onClick={arbataHandler}>Arbata</button>
            <button onClick={vanduoHandler}>Vandeni</button>
            <button onClick={niekoHandler}>Nieko</button>
            <p>Jusu pasirinkimas: {pasirinkimas}</p>
        </div>
    )
}

export default Pvz3