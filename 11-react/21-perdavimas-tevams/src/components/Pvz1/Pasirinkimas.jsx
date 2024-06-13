import { useState } from "react"
import Mygtukai from "./Mygtukai"

const Pasirinkimas = () => {

    const [tekstas, setTekstas] = useState(`kol kas niekas nepasirinkta`)

    const gautasPasirinkimas = (naujasPasirinkimas) => {
        setTekstas(naujasPasirinkimas)
    }

    return (
        <div className="blokas">
            <h2>Pasirinkimas</h2>
            <Mygtukai issiusti={gautasPasirinkimas}/>
            <p>Jus pasirinkote: {tekstas}</p>
        </div>
    )
}

export default Pasirinkimas