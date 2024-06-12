import { useState, useRef } from "react"

const Uzd1 = () => {

    const [skaicius, setSkaicius] = useState(0)

    const norimoSkRef = useRef()

    const rinktisHandler = () => {
        setSkaicius(norimoSkRef.current.valueAsNumber)

        //isvalymas:
        norimoSkRef.current.value = null;
    }

    const arLyginis = () => {

        if (skaicius == null || skaicius == 0){
            return <p></p>
        }

        return skaicius % 2 == 0 ? <p>Skaicius lyginis!</p> : <p>Skaicius nelyginis!</p>
    }

    const arTeigiamas = () => {

        return skaicius < 0 ? <p>Pasirinktas skaicius: {skaicius}, neigiamas!</p> : skaicius > 0 && <p>Pasirinktas skaicius: {skaicius}, teigiamas!</p>
    }

    return (
        <div className="blokas">
            <h2>Uzd1</h2>
            <label htmlFor="norimasSkInput">Norimas skaicius: </label>
            <input ref={norimoSkRef} type="number" id="norimasSkInput" value={null}/>
            <button onClick={rinktisHandler}>Rinktis</button>
            <br />
            {
                skaicius == 0 || skaicius == null && <p>Pasirinkite skaiciu!</p>
            }
            {arTeigiamas()}
            {arLyginis()}
            
        </div>
    )
}

export default Uzd1