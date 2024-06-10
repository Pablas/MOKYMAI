import { useState } from "react"

const Pvz4 = () => {

    const [skaicius, setSkaicius] = useState(0);

    const didinti1Handler = () => {
        setSkaicius(skaicius + 1);
    }

    const mazinti1Handler = () => {
        setSkaicius(skaicius - 1)
    }

    const didinti5Handler = () => {
        setSkaicius(skaicius + 5)
    }

    const mazinti5Handler = () => {
        setSkaicius(skaicius - 5)
    }

    const grazintiHandler = () => {
        setSkaicius(0)
    }

    return (
        <div className="blokas">
            <h2>Skaiciaus keitimas</h2>
            <button onClick={didinti1Handler}>Didinti 1</button>
            <button onClick={mazinti1Handler}>Mazinti 1</button>
            <button onClick={didinti5Handler}>Didinti 5</button>
            <button onClick={mazinti5Handler}>Mazinti 5</button>
            <button onClick={grazintiHandler}>Grazinti i 0</button>
            <p>Dabartine reiksme: {skaicius}</p>
        </div>
    )
}

export default Pvz4