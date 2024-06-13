import { useRef } from "react"
import { useState } from "react"

const KnygosIvedimas = (props) => {

    const pavadinimasRef = useRef()
    const kainaRef = useRef()
    const metaiRef = useRef()

    const [naujaKnyga, setNaujaKnyga] = useState()

    const irasytiKnygaHandle = (e) => {
        e.preventDefault()

        setNaujaKnyga({
            pavadinimas: pavadinimasRef.current.value,
            kaina: kainaRef.current.valueAsNumber,
            metai: metaiRef.current.valueAsNumber
        },)

        //issiusti:
        props.onNaujaKnyga(naujaKnyga)

    }

    return (
        <div>
            <form onSubmit={irasytiKnygaHandle}>
                <div>
                    <label htmlFor="pavadinimasInput">Iveskite pavadinima: </label>
                    <input ref={pavadinimasRef} type="text" id="pavadinimasInput" />
                </div>
                <div>
                    <label htmlFor="kainaInput">Iveskite kaina: </label>
                    <input ref={kainaRef} type="number" id="kainaInput" />
                </div>
                <div>
                    <label htmlFor="metaiInput">Iveskite metus: </label>
                    <input ref={metaiRef} type="number" id="metaiInput" />
                </div>
                <button type="submit">Irasyti</button>
            </form>
        </div>
    )
}

export default KnygosIvedimas