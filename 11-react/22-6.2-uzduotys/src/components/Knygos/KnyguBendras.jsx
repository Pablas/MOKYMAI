import { useState } from "react"
import KnygosIvedimas from "./KnygosIvedimas"
import KnyguSpausdinimas from "./KnyguSpausdinimas"

const KnyguBendras = () => {

    const [knygos, setKnygos] = useState([
        {pavadinimas: `Geriausia knyga`, kaina: 29.99, metai: 1995},
        {pavadinimas: `Poteris`, kaina: 34.99, metai: 2010},
        {pavadinimas: `Donaldas`, kaina: 5, metai: 2013},
        
    ])

    const knygosGavimas = (x) => {
        setKnygos([x, ...knygos])
    }

    const isvalytosKnygos = (x) => {
        setKnygos(x)
    }

    return (
        <div className="blokas">
            <h2>Knygos</h2>
            <KnygosIvedimas onNaujaKnyga={knygosGavimas}/>
            <KnyguSpausdinimas visosKnygos={knygos} onValyti={isvalytosKnygos}/>
            
        </div>
    )
}

export default KnyguBendras