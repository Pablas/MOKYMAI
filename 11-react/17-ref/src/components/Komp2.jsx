import { useState, useRef } from "react"

const Komp2 = () => {

    const [skaicius, setSkaicius] = useState(null)

    const skaiciusRef = useRef()

    const buttonHandler = () => {
        setSkaicius(skaiciusRef.current.valueAsNumber)
        skaiciusRef.current.value = `` //isvalyti inputa, po mygtuko paspaudimo
    }

    return (
        <div className="blokas">
            <h2>Skaicius</h2>
            <div>
                <label htmlFor="skaiciusInput">Iveskite skaiciu: </label>
                <input ref={skaiciusRef} type="number" id="skaiciusInput" />
                <button onClick={buttonHandler} >Ivesti</button>
            </div>
            <p>Ivestas skaicius: {skaicius}</p>
        </div>
    )
}

export default Komp2