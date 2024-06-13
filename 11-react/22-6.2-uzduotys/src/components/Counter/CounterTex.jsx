import { useState } from "react"
import CounterMygtukai from "./CounterMygtukai"

const CounterTex = () => {

    const [counter, setCounter] = useState(0)

    const counterMygtukai = (x) => {
        setCounter(counter + x)
    }

    return (
        <div className="blokas">
            <h2>CounterTex</h2>
            <CounterMygtukai onPrideti={counterMygtukai}/>
            <p>Skaicius: {counter}</p>
        </div>
    )
}

export default CounterTex