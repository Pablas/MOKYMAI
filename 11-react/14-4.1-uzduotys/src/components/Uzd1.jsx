import { useState } from "react"

const Uzd1 = () => {

    const [zodis, setZodis] = useState(``)

    const raudonasHandler = () => {
        setZodis(`Pomidoras`)
    }

    const zaliasHandler = () => {
        setZodis(`Agurkas`)
    }

    return (
        <div className="blokas">
            <h2>Uzd1</h2>
            <button onClick={raudonasHandler}>Raudonas</button>
            <button onClick={zaliasHandler}>Žalias</button>
            <p>{zodis}</p>
        </div>
    )
}

export default Uzd1