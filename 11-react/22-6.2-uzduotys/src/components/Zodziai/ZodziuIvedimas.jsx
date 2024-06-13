import { useState } from "react"
import { useRef } from "react"

const ZodziuIvedimas = (props) => {

    const [klaida, setKlaida] = useState(``)

    const inputoRef = useRef()

    const paspaudimasHandle = (e) => {
        e.preventDefault()

        //issiuntimas jeigu nera tuscio laukelio:
        if (inputoRef.current.value.length > 0){
            props.onNaujasZodis(inputoRef.current.value)
            setKlaida(``)
        }

        //klaida jei tuscias laukelis:
        if (inputoRef.current.value.length < 1){
            setKlaida(`Laukelis tuščias!`)
        }

        //isvalymas laukelio:
        inputoRef.current.value = ``

    }

    return (
        <div>
            <form onSubmit={paspaudimasHandle}>
                <label htmlFor="zodisInput">Naujas zodis: </label>
                <input ref={inputoRef} type="text" id="zodisInput" />
                <button type="submit">Ivesti</button>
                {
                    klaida.length > 0 &&
                    <p style={{color: `red`, fontSize: `12px`}}>{klaida}</p>
                }
            </form>
        </div>
    )
}

export default ZodziuIvedimas