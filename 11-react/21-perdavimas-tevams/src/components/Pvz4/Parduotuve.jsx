import NaujaPreke from "./NaujaPreke"
import PrekiuIsvedimas from "./PrekiuIsvedimas"
import { useState } from "react"

const Parduotuve = () => {

    const [prekes, setPrekes] = useState([
        { id: 1, pavadinimas: `Duona`, kaina: 1.5 },
        { id: 2, pavadinimas: `Pienas`, kaina: 1 },
        { id: 3, pavadinimas: `Kefyras`, kaina: 2 },
    ])

    return (
        <div className="blokas">
            <h2>Parduotuve</h2>
            <NaujaPreke />
            <PrekiuIsvedimas data={prekes}/>

        </div>
    )
}

export default Parduotuve