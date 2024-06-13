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
        setKnygos([...knygos, x])
    }

    console.log(knygos)
    return (
        <div className="blokas">
            <h2>Knygos</h2>
            <KnygosIvedimas onNaujaKnyga={knygosGavimas}/>
            <KnyguSpausdinimas visosKnygos={knygos}/>
            
            {/* {
                knygos.map((k, i) => (
                    <p key={i}>Knyga: {k.pavadinimas}, isleista {k.metai}, kaina {k.kaina}</p>
                ))
            } */}
        </div>
    )
}

export default KnyguBendras