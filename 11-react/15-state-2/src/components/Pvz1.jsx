import { useState } from "react"

const Pvz1 = () => {

    const [zodis, setZodis] = useState(``)

    const inputHandler = (e) => {
        setZodis(e.target.value)
    }

    return (
        <div className="blokas">
            <h2>Pvz1</h2>
            <label htmlFor="zodisInput">Įveskite žodį: </label>
            <input type="text" id="zodisInput" onInput={inputHandler}/>
            <p>Įvestas žodis: {zodis == `` ? `Neįvestas žodis` : zodis}</p>
            { zodis != `` && <p>Simbolių kiekis: {zodis.length}</p>}
            
        </div>
    )
}

export default Pvz1