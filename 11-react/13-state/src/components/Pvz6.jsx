import { useState } from "react"

const Pvz6 = () => {

    const [pasirinkimas, setPasirinkimas] = useState(`nepasirinkta`)

    const pasirinktaHandler = (e) => {
        setPasirinkimas(e.target.textContent)
    }

    return (
        <div className="blokas">
            <h2>Labiausiai patiko?</h2>
            <button onClick={ pasirinktaHandler }>HTML</button>
            <button onClick={ pasirinktaHandler }>CSS</button>
            <button onClick={ pasirinktaHandler }>JavaScript</button>
            <button onClick={ pasirinktaHandler }>React</button>
            <p>Pasirinkta: {pasirinkimas}</p>
        </div>
    )
}

export default Pvz6