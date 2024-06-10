import { useState } from "react"

const Pvz5 = () => {

    const [skaicius, setSkaicius] = useState(0);

    const skaiciausKeitimasHandler = (pokytis) => {

        if (pokytis === 0){
            setSkaicius(0)
        } else {
            setSkaicius(skaicius + pokytis)
        }
    }

    return (
        <div className="blokas">
            <h2>Skaiciaus keitimas</h2>
            <button onClick={ () => skaiciausKeitimasHandler(1) }>Didinti 1</button>
            <button onClick={ () => skaiciausKeitimasHandler(-1) }>Mazinti 1</button>
            <button onClick={ () => skaiciausKeitimasHandler(5) }>Didinti 5</button>
            <button onClick={ () => skaiciausKeitimasHandler(-5) }>Mazinti 5</button>
            <button onClick={ () => skaiciausKeitimasHandler(0) }>Grazinti i 0</button>
            <p>Dabartine reiksme: {skaicius}</p>
        </div>
    )
}

export default Pvz5