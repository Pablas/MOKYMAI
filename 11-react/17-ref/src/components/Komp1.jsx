import { useRef, useState } from "react"

const Komp1 = () => {

    const [salis, setSalis] = useState(``)

    const salisRef = useRef()

    const mygtukasHandler = () => {
        setSalis(salisRef.current.value)
    }

    return (
        <div className="blokas">
            <h2>Megstamiausia salis</h2>
            <div>
                <label htmlFor="salisInput">Iveskite megstamiausia sali: </label>
                <input ref={salisRef} type="text" id="salisInput" />
                <button onClick={mygtukasHandler}>ivesti</button>
            </div>
            <p>Jus ivedete: {salis}</p>
        </div>
    )
}

export default Komp1